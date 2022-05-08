import "./cashMethodcss.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import genBill from "../Report/reportGen";

function Cash_Method(props) {
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState([]);
  const [service, setService] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [price, setPrice] = useState(0);
  const [balance, setBalance] = useState(0);
  const [cash, setCash] = useState(0);
  const [sheduletBill, setSheduleBill] = useState();

  useEffect(() => {
    function getBillDetails() {
      axios
        .get("http://localhost:3001/api/payments/getapending/" + id)
        .then((res) => {
          console.log(res.data);
          setSheduleBill(res.data);
          setName(res.data.name);
          setService(res.data.service);
          setMaintenance(res.data.maintenance);
          setVehicle(res.data.vehicle);
          setPrice(res.data.price);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getBillDetails();
  }, []);

  let total = 0;
  let totalPayable = parseFloat(price).toFixed(2);

  total = total + parseFloat(totalPayable);

  // update after bill payment
  function updateBillDetailsandInsertIncome(e) {
    e.preventDefault();

    let paidStatus = "paid";
    let method = "cash";
    const update = { paidStatus, cash, balance };
    let itemName = service;
    const earnings = { itemName, price, paidStatus, method };

    if (cash >= total) {
      axios
        .put("http://localhost:3001/api/payments/update/" + id, update)
        .then((res) => {
          console.log(res.data.status);
          // insert to income table after bill payment
          axios
            .post("http://localhost:3001/api/payments/addearnings", earnings)
            .then((res) => {
              console.log(res.data);
              alert("Payment Successfull");
              history.push("/payment/pendinglist");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    } else {
      alert("Please enter the paid amount");
    }
  }

  function downloadPDF(e) {
    e.preventDefault();

    if (cash >= total) {
      genBill(sheduletBill, cash);
    } else {
      alert("Please enter the paid amount");
    }
  }

  return (
    <div className="full">
      <div className="squareSet">
        <div className="leftSquare">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h2 className="rTititle">Vehicle modification & Repair</h2>
            <div
              style={{
                marginLeft: "auto",
                paddingTop: "22px",
                paddingRight: "15px",
              }}
            >
              <h4>Vehicle Model :</h4>
              <p>{vehicle}</p>
            </div>
          </div>
          <div className="billItem" style={{ textAlign: "center" }}>
            <ul
              style={{
                paddingTop: "30px",
                width: "500px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <li style={{ float: "left", fontSize: "20px" }}>{service}</li>
              <p style={{ float: "right", fontSize: "20px" }}>{totalPayable}</p>
            </ul>
            <hr
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1.5px solid black",
              }}
            />
            <ul
              style={{
                width: "500px",
                marginLeft: "auto",
                marginRight: "auto",
                listStyle: "none",
              }}
            >
              <li style={{ float: "left", fontSize: "20px" }}>Total</li>
              <p style={{ float: "right", fontSize: "20px" }}>
                {total.toFixed(2)}
              </p>
            </ul>
            <button
              className="btn btn-primary"
              style={{ marginBottom: "-300px" }}
              onClick={(e) => {
                downloadPDF(e);
              }}
            >
              Generate bill pdf
            </button>
          </div>
        </div>
        <div className="rightSquare">
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            Balance Calculator &<br />
            System Save
          </h2>
          <div
            style={{
              border: "1px solid white",
              width: "80%",
              borderRadius: "5px",
              marginLeft: "auto",
              marginRight: "auto",
              height: "220px",
              padding: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "35px",
              }}
            >
              <label style={{ fontSize: "18px" }}>Total</label>
              <label
                style={{
                  fontSize: "18px",
                  marginLeft: "auto",
                  marginRight: "15px",
                }}
              >
                {total.toFixed(2)}
              </label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "35px",
                marginTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px" }}>Payment</label>
              <input
                type="text"
                style={{
                  fontSize: "18px",
                  marginLeft: "auto",
                  marginRight: "15px",
                  width: "150px",
                }}
                onChange={(e) => {
                  setBalance(parseInt(e.target.value) - parseInt(totalPayable));
                  setCash(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "35px",
                marginTop: "25px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Balance
              </label>
              <label
                style={{
                  fontSize: "18px",
                  marginLeft: "auto",
                  marginRight: "15px",
                  fontWeight: "bold",
                }}
              >
                {balance}
              </label>
            </div>
          </div>

          <div style={{ width: "100%", textAlign: "center" }}>
            <button
              style={{ width: "250px", marginTop: "10px" }}
              className="btn btn-success"
              onClick={(e) => updateBillDetailsandInsertIncome(e)}
            >
              Process
            </button>
            <br />
            <button
              style={{ width: "250px", marginTop: "10px" }}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cash_Method;
