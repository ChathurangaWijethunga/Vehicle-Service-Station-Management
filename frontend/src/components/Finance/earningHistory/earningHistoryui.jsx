import "./earningHistorycss.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Earning_history(props) {
  const [earningList, setEarningList] = useState([]);
  let total = 0;
  //get all earnings
  useEffect(() => {
    function getEarningList() {
      axios
        .get("http://localhost:3001/api/payments/getearnings")
        .then((res) => {
          setEarningList(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEarningList();
  }, []);

  // clear history
  function clearEarningHistory(e) {
    e.preventDefault();
    earningList.map((data) => {
      let itemName = data.itemName;
      let price = data.price;
      let paidStatus = data.paidStatus;
      let newSet = { itemName, price, paidStatus };

      axios
        .post("http://localhost:3001/api/payments/backupearnings", newSet)
        .then((res) => {
          console.log(res);
          axios
            .delete(
              "http://localhost:3001/api/payments/deleteEarnings/" + paidStatus
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  return (
    <div className="full">
      <h1 className="er">Earning History</h1>
      <button
        className="btn btn-primary"
        style={{ float: "right", marginTop: "-70px", marginRight: "50px" }}
        onClick={(e) => clearEarningHistory(e)}
      >
        CLEAR
      </button>
      <table class="table table-hover table-dark chamT">
        <thead>
          <tr>
            <th style={{ width: "75%" }} scope="col">
              Title
            </th>

            <th scope="col" colSpan="2">
              Income (Daily)
            </th>
          </tr>
        </thead>
        <tbody>
          {earningList.map((data) => {
            total = total + parseFloat(data.price);

            return (
              <tr>
                <td>{data.itemName}</td>
                <td style={{ width: "10px" }}>Rs</td>
                <td>{parseFloat(data.price).toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td style={{ fontWeight: "bold" }}>Rs</td>
            <td style={{ fontWeight: "bold" }}>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Earning_history;
