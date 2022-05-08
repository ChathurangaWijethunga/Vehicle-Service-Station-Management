import "./onlineMethodcss.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import genBill from "../Report/reportGen";

function Online_Method(props) {
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

  // card details
  const [owner, setOwner] = useState("");
  const [payid, setPayID] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

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
          setPayID(res.data._id);
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
    let method = "online";
    const update = { paidStatus, cash, balance };
    let itemName = service;
    const earnings = { itemName, price, paidStatus, method };

    let cardnumber1 = cardnumber;

    const crdno = { cardnumber1 };

    console.log(crdno);

    // check inputs fields are empty
    if (
      owner != "" ||
      cvv != "" ||
      cardnumber != "" ||
      year != "" ||
      month != ""
    ) {
      if (cash >= total) {
        axios
          .put("http://localhost:3001/api/payments/update/" + id, update)
          .then((res) => {
            console.log(res.data.status);
            // insert to income table after bill payment
            axios
              .post("http://localhost:3001/api/payments/addearnings", earnings)
              .then((res) => {
                axios
                  .post("http://localhost:3001/api/payments/cardDetails", crdno)
                  .then((res) => {
                    console.log(res.data);
                    if (res.data == "no") {
                      const cardDetails = {
                        payid,
                        owner,
                        cardnumber,
                        cvv,
                        year,
                        month,
                      };
                      axios
                        .post(
                          "http://localhost:3001/api/payments/insertCardDetails",
                          cardDetails
                        )
                        .then((res) => {
                          console.log(res.data);
                          alert("Online payment successfull");
                          window.location = "/payment/pendinglist";
                        });
                    } else {
                      alert("Online payment successfull");
                      window.location = "/payment/pendinglist";
                    }
                  });
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
    } else {
      alert("Please fill the all details");
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
        <div className="middleSquare">
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            CONFIRM PURCHASE
          </h2>
          <form
            style={{
              padding: "20px",
              paddingTop: "25px",
              paddingBlock: "36px",
              background: "white",
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-7px",
              borderRadius: "5px",
            }}
          >
            <div>
              <div>
                <label
                  style={{
                    fontWeight: "bold",
                  }}
                  for="owner"
                >
                  Owner
                </label>
                <label
                  style={{
                    marginLeft: "255px",
                    fontWeight: "bold",
                  }}
                  for="cvv"
                >
                  CVV
                </label>
                <br />
                <input
                  id="owner"
                  type="text"
                  style={{
                    width: "76%",
                    marginRight: "5px",
                    borderRadius: "3px",
                    border: "1px solid #ccc",
                    color: "#555",
                  }}
                  onChange={(e) => {
                    setOwner(e.target.value);
                  }}
                  required
                />
                <input
                  id="cvv"
                  type="text"
                  style={{
                    width: "22.7%",
                    borderRadius: "3px",
                    border: "1px solid #ccc",
                    color: "#555",
                  }}
                  onChange={(e) => {
                    setCvv(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    fontWeight: "bold",
                  }}
                  for="owner"
                >
                  Card Number
                </label>
                <br />
                <input
                  id="owner"
                  type="text"
                  style={{
                    width: "100%",
                    marginRight: "5px",
                    borderRadius: "3px",
                    border: "1px solid #ccc",
                    color: "#555",
                  }}
                  onChange={(e) => {
                    setCardnumber(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    fontWeight: "bold",
                  }}
                  for="expDate"
                >
                  Expiration Date
                </label>
                <br />
                <select
                  id="expDate"
                  style={{
                    marginRight: "10px",
                    width: "100px",
                    height: "32px",
                    background: "white",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option>Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  id="expDate"
                  style={{
                    width: "70px",
                    height: "32px",
                    background: "white",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option>Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
                <img
                  style={{
                    width: "58px",
                    marginTop: "-5px",
                    marginLeft: "33.5px",
                    marginRight: "3px",
                  }}
                  src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/visa.jpg"
                />
                <img
                  style={{
                    width: "58px",
                    marginTop: "-5px",
                    marginRight: "3px",
                  }}
                  src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/mastercard.jpg"
                />
                <img
                  style={{ width: "58px", marginTop: "-5px" }}
                  src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/amex.jpg"
                />
              </div>
            </div>

            <div
              style={{ width: "100%", textAlign: "center", marginTop: "10px" }}
            >
              <button
                style={{
                  width: "48.5%",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                className="btn btn-success"
                type="button"
                onClick={(e) => {
                  updateBillDetailsandInsertIncome(e);
                }}
              >
                Process
              </button>
              <button
                style={{ width: "48.5%", marginTop: "10px" }}
                className="btn btn-danger"
              >
                Cancel
              </button>
            </div>
          </form>
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
              background: "white",
              width: "80%",
              borderRadius: "5px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-40px",
              height: "285px",
              padding: "40px",
              paddingTop: "70px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <label style={{ fontSize: "18px" }}>Total</label>
              <label
                style={{
                  fontSize: "18px",
                  marginLeft: "auto",
                }}
              >
                {total.toFixed(2)}
              </label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px" }}>Payment</label>
              <input
                type="text"
                style={{
                  fontSize: "18px",
                  marginLeft: "auto",
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
                  fontWeight: "bold",
                }}
              >
                {balance}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online_Method;
