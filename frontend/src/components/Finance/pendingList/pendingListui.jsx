import "./pendingListcss.css";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Pending_List(props) {
  const [pendings, setPendings] = useState([]);
  let paidStatus = null;
  //get all earnings
  useEffect(() => {
    function getPendings() {
      axios
        .get("http://localhost:3001/api/payments/getallpendings")
        .then((res) => {
          setPendings(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPendings();
  }, []);
  return (
    <div className="full">
      <h1 className="sum">Pending Payments</h1>
      <table
        style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        class="table table-hover table-dark"
      >
        <thead>
          <tr>
            <th style={{ width: "50%" }} scope="col">
              Name
            </th>
            <th scope="col">Vehicle</th>
            <th style={{ width: "20%" }} scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {pendings.map((data) => {
            paidStatus = data.paidStatus;

            if (paidStatus != "paid") {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.vehicle}</td>
                  <td>
                    <Link to={"/payment/billreview/" + data._id}>
                      <button className="btn btn-primary" type="submit">
                        Review
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Pending_List;
