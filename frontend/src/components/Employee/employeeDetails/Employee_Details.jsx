import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./empDetails.css";
import generatePDFEmployee from "../report/reportGenerate";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    function getEmployee() {
      axios
        .get("http://localhost:3001/api/Employee/all")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEmployee();
  }, []);

  function downloadReport() {
    generatePDFEmployee(employees);
  }

  return (
    <div className="tableStyle">
      <table className="table table-success table-striped empdetailtable">
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th style={{ textAlign: "center" }} scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees) => (
            <tr>
              <th scope="row">{employees.eid}</th>
              <td>{employees.fName + " " + employees.lName}</td>
              <td style={{ textAlign: "center" }}>
                <Link to={"/hrView/" + employees.eid + "/" + employees._id}>
                  <button className="btn Btn btn-primary btn-sm view">
                    View
                  </button>
                </Link>
                <Link to={"/empUpdate/" + employees._id}>
                  <button className="btn Btn btn-primary btn-sm edit">
                    Edit
                  </button>
                </Link>
                <Link to={"/empDelete/" + employees._id}>
                  <button className="btn Btn btn-primary btn-sm delete">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addEmp">
        <button className="btn Btn btn-primary btn-sm addEmp">
          ADD NEW EMPLOYEE
        </button>
      </Link>
      <button
        className="btn Btn btn-primary btn-sm addEmp"
        style={{ backgroundcolor: "#808080", marginLeft: "10px" }}
        onClick={(e) => {
          downloadReport();
        }}
      >
        Generate report
      </button>
      {/* <a href="http://localhost:3000/allsup">
        <button
          className="btn Btn btn-primary btn-sm addEmp"
          style={{ backgroundcolor: "#808080", marginLeft: "10px" }}
          
        >
          View Suppliers
        </button>
      </a> */}
      {/* <a href="http://localhost:3000/accept">
        <button
          className="btn Btn btn-primary btn-sm addEmp"
          style={{ backgroundcolor: "#808080", marginLeft: "10px" }}
        >
          Accept Supplier
        </button>
      </a> */}
    </div>
  );
};

export default EmployeeList;
