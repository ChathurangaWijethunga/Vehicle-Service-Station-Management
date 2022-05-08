import "./outgoingHistorycss.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Outgoing_history(props) {
  const [outgoingList, setOutgoingList] = useState([]);
  //get all earnings
  useEffect(() => {
    function getOutgoingList() {
      axios
        .get("http://localhost:3001/api/payments/getoutgoings")
        .then((res) => {
          setOutgoingList(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOutgoingList();
  }, []);
  return (
    <div className="full">
      <h1 className="er">Outgoing History</h1>
      <table class="table table-hover table-dark chamT">
        <thead>
          <tr>
            <th style={{ width: "75%" }} scope="col">
              Title
            </th>
            <th scope="col">Income (Daily)</th>
          </tr>
        </thead>
        <tbody>
          {outgoingList.map((data) => {
            return (
              <tr>
                <td>{data.itemName}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>Rs 4000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Outgoing_history;
