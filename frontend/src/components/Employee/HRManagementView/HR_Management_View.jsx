import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./HRManagementView.css";
import { Button } from "react-bootstrap";

const HRView = (props) => {
  const { id, empID } = useParams();

  const [eid, seteid] = useState("");
  const [fName, setfName] = useState();
  const [bSalary, setbsalary] = useState("0.00");
  const [oTime, setoTime] = useState("0.00");
  const [tot, setTot] = useState("0.00");
  const [btnHide, setBtnHide] = useState("showsalarysheet");
  const [btnText, setbtnText] = useState("btnText");

  //get employee details

  useEffect(() => {
    function getEmployee() {
      axios
        .get("http://localhost:3001/api/Employee/one/" + id)
        .then((res) => {
          seteid(res.data.eid);
          setfName(res.data.fName + " " + res.data.lName);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEmployee();
  }, []);

  //get salary details
  useEffect(() => {
    function getSalaryDetails() {
      axios
        .get("http://localhost:3001/api/Employee/getasalarysheet/" + empID)
        .then((res) => {
          setbsalary(res.data.basicSalary);
          setoTime(res.data.OverTime);
          setTot(res.data.Total);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSalaryDetails();
  }, []);

  //get Scheduled details
  const [scheduledDetails, setscheduledDetails] = useState([]);
  useEffect(() => {
    function getSchedules() {
      axios
        .get("http://localhost:3001/api/Employee/getschedules/" + empID)
        .then((res) => {
          setscheduledDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSchedules();
  }, []);

  // get employee's salary details
  function showSalaryTable(e) {
    e.preventDefault();
    setBtnHide("btnHide");
    setbtnText("btnHide");
  }

  return (
    <div className="data2">
      <div className="upper">
        <div className="empid">
          <div className="InputControl">
            <label>
              <b>Employee ID</b>
            </label>
            <input
              style={{ marginLeft: "38px" }}
              className="empID"
              type="text"
              disabled
              defaultValue={eid}
            />
          </div>
          <div className="InputControl">
            <label>
              <b>Employee Name</b>
            </label>
            <input
              className="empID"
              type="text"
              disabled
              defaultValue={fName}
            />
            <br></br>
          </div>
        </div>
        <table className="table ptable">
          <tbody>
            <tr>
              <th scope="row">Basic Salary</th>
              <td>{bSalary}</td>
            </tr>
            <tr>
              <th scope="row">Over Time</th>
              <td>{oTime}</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>
                <b>{tot}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btnHandle">
          <Button
            className={btnHide}
            onClick={(e) => {
              showSalaryTable(e);
            }}
          ></Button>
          <p
            class={btnText}
            onClick={(e) => {
              showSalaryTable(e);
            }}
          >
            Click me to see salary sheet
          </p>
        </div>
      </div>
      <div className="under">
        <div className="recordsControl">
          <div className="atdiv">
            <h2 className="AssignTask">Assign Task</h2>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Schedule Name</th>
                  <th scope="col">Task List</th>
                  <th scope="col">Task Type</th>
                  <th scope="col">Scheduled Date</th>
                  <th scope="col">Scheduled Time</th>
                </tr>
                <td>Mindula</td>
                <td>Full Body Wash, Vacuuming</td>
                <td>Service</td>
                <td>07-05-2022</td>
                <td>15:30</td>
              </thead>
              <tbody>
                {scheduledDetails.map((data) => {
                  var date = new Date(data.schDate).toDateString();
                  return (
                    <tr className="schTR">
                      <td>{data.schName}</td>
                      <td>
                        <ul class="ScheduledtaskList">
                          {data.taskDetails.taskList.map((list) => {
                            return <li>{list}</li>;
                          })}
                        </ul>
                      </td>
                      <td>{data.taskDetails.taskType}</td>
                      <td>{date}</td>
                      <td>{data.scheduledTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="srdiv">
            <h2
              style={{
                marginTop: "45px",
                paddingBottom: "20px",
                paddingTop: "5px",
              }}
            >
              Service Records
            </h2>

            <ul>
              <li>Full Body Wash</li>
              <li>Vacuuming</li>
              <li>Petrol / Diesel Filter Chang</li>
              <li>Filling AC Gas</li>
              <li>WindScreen Treatment</li>
              <li>Use the Right Oil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HRView;
