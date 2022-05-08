import "./customerBillcss.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import genBill from "../Report/reportGen";

function Customer_Bill(props) {
  const { id } = useParams();

  const [name, setName] = useState([]);
  const [service, setService] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    function getBillDetails() {
      axios
        .get("http://localhost:3001/api/payments/getapending/" + id)
        .then((res) => {
          console.log(res.data);
          setName(res.data.name);
          setService(res.data.service);
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
          </div>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              color: "red",
              marginLeft: "30px",
              marginTop: "10px",
            }}
          >
            Payment Methods
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Link
              style={{ marginLeft: "auto", width: "50%", height: "50px" }}
              to={"/payment/cashportal/" + id}
            >
              <button
                style={{ marginLeft: "10px", width: "97%", height: "50px" }}
                className="btn btn-success"
              >
                Cash
              </button>
            </Link>
            <Link
              style={{
                marginRight: "auto",
                width: "50%",
                height: "50px",
              }}
              to={"/payment/onlineportal/" + id}
            >
              <button
                style={{
                  marginRight: "auto",
                  width: "97%",
                  marginLeft: "10px",
                  height: "50px",
                }}
                className="btn btn-info"
              >
                Online
              </button>
            </Link>
          </div>
        </div>
        <div className="rightSquare">
          <div style={{ marginTop: "25px", marginLeft: "35px" }}>
            <label style={{ fontWeight: "bold" }}>Name</label>
            <br />
            {name}
            <br />
            <label style={{ fontWeight: "bold" }}>Address</label>
            <br />
            Kalutara
            <br />
            <label style={{ fontWeight: "bold" }}>Phone</label>
            <br />
            0717754456
            <br />
            <label style={{ fontWeight: "bold" }}>Email</label>
            <br />
            sunil.s@gmail.com
            <br />
            <br />
            <br />
            <br />
            <br />
            <label style={{ fontWeight: "bold" }}>Vehicles</label>
            <br />
            {vehicle}
            <br />
            {vehicle}
            <br />
          </div>
          <div
            style={{
              float: "right",
              marginTop: "-370px",
              marginRight: "25px",
              width: "150px",
              height: "150px",
              border: "1px solid black",
            }}
          >
            <img
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="Profile Picture"
              width={"149px"}
              height={"149px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_Bill;
