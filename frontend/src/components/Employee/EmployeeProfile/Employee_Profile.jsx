import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import "./empProfile.css";

const Profile = () => {
  const { id } = useParams();

  // set Leave Arrive times
  const [eid, setEid] = useState(id);
  const [aTime, setATime] = useState();
  const [allAttendee, setAllAttendee] = useState();
  const [todayDate, settodayDate] = useState();
  const [day, setDBdate] = useState();
  const [day1, setDBdate1] = useState();
  const [dbNextDate, setDBNextDate] = useState([]);
  const [salaryTable, setcheckSalarytable] = useState([]);
  const [basicSalary, setBasicSalary] = useState("10000.00");
  const [getOverTime, setGetOverTime] = useState(0);
  const [salarySheet, setSalarySheet] = useState([]);

  //get today Date
  useEffect(() => {
    function getTodayDateNumber() {
      const date = new Date().getDate();
      settodayDate(date);
    }
    getTodayDateNumber();
  }, []);

  // check ther is any salary table for currunt employee
  useEffect(() => {
    function getSalaryTable() {
      axios
        .get("http://localhost:3001/api/Employee/getasalarysheet/" + eid)
        .then((res) => {
          setcheckSalarytable(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSalaryTable();
  }, []);

  // get Arrive time by clicking button
  function getArriveTime(e) {
    const aTime = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const presentDate = todayDate + 1;
    console.log(aTime);
    console.log(date);
    console.log(day);
    console.log(todayDate);

    var day2 = day1.map((data) => {
      return data.date;
    });
    const getDBDate = day2[day2.length - 1];
    var splitDBDate;
    var day3;
    if (getDBDate != undefined) {
      splitDBDate = getDBDate.split("/");
      day3 = splitDBDate[1];
    }

    var OverTime = 0;
    var Total = (parseFloat(basicSalary) + 0).toFixed(2);

    if (salaryTable == null) {
      const salaryTab = { eid, basicSalary, OverTime, Total };
      axios
        .post("http://localhost:3001/api/Employee/addempsalarysheet", salaryTab)
        .then(() => {
          console.log("Salary table created for " + eid + " Employee");
        })
        .catch((err) => {
          console.log(err);
        });

      if (day3 == todayDate) {
        alert("You can mark your attendance again after 24h !!!");
      } else {
        const dataSet = { eid, date, aTime, presentDate };
        axios
          .post("http://localhost:3001/api/Employee/addAttendee", dataSet)
          .then(() => {
            alert("Good Morning");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(dataSet);
      }
    } else {
      if (day3 == todayDate) {
        alert("You can mark your attendance again after 24h !!!");
      } else {
        const dataSet = { eid, date, aTime, presentDate };
        axios
          .post("http://localhost:3001/api/Employee/addAttendee", dataSet)
          .then(() => {
            alert("Good Morning");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(dataSet);
      }
    }
  }

  //get all attendees for prevent repeat same eid
  useEffect(() => {
    function getAllAttendees() {
      axios
        .get("http://localhost:3001/api/Employee/allAttendee")
        .then((res) => {
          setAllAttendee(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllAttendees();
  }, []);

  // get arrive time for calculate over time
  useEffect(() => {
    function getAtime() {
      axios
        .get("http://localhost:3001/api/Employee/oneAttendee/" + eid)
        .then((res) => {
          setATime(res.data.aTime);
          const date = res.data.date;
          const day = date.split("/");
          setDBdate(day[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAtime();
  }, []);

  //get dbNext date for control leave time update
  useEffect(() => {
    function getAllAttendeesbyID() {
      axios
        .get("http://localhost:3001/api/Employee/allAttendee/" + eid)
        .then((res) => {
          setDBNextDate(res.data);
          setDBdate1(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllAttendeesbyID();
  }, []);

  // OverTime pays calcuations
  function CalcOTPays(hours) {
    const timeset = hours.split(":");
    const h = parseInt(timeset[0]);
    const m = parseInt(timeset[1]);
    const s = parseInt(timeset[2]);

    // convert timeset to seconds
    const seconds = h * 3600 + m * 60 + s;

    // convert pay hour to secs
    const hourly = 250;
    const secondsly = hourly / 60 / 60;
    const cost = seconds * secondsly;
    return cost;
  }

  //get old OverTime payment
  useEffect(() => {
    function getOldOverTime() {
      axios
        .get("http://localhost:3001/api/employee/getasalarysheet/" + eid)
        .then((res) => {
          setGetOverTime(res.data.OverTime);
          setSalarySheet(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOldOverTime();
  }, []);

  // get Leave time by clicking button
  function getLeaveTime(e) {
    const l24Time = new Date().toLocaleTimeString("en-GB");
    const lTime = new Date().toLocaleTimeString();

    // Convert milli second to hours\
    function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return hours + ":" + minutes + ":" + seconds;
    }

    // calculate OverTime
    const A1 = l24Time.split(" ");
    const tt1 = A1[0].split(":");

    const y = "2021";
    const m = "02";
    const d = "11";

    const lh = parseInt(tt1[0]);
    const lmin = parseInt(tt1[1]);
    const ls = parseInt(tt1[2]);

    const t1 = new Date(y, m, d, lh, lmin, ls).getTime();

    // Default end time
    const dayEnd = ["7", "00", "00"];

    const deh = parseInt(dayEnd[0]);
    const dem = parseInt(dayEnd[1]);
    const des = parseInt(dayEnd[2]);

    const t2 = new Date(y, m, d, deh, dem, des).getTime();

    var oTime = msToTime(t1 - t2);

    var dataSet;

    if (deh <= lh && dem <= lmin && des <= ls) {
      dataSet = { lTime, oTime };
    } else {
      oTime = "--";
      dataSet = { lTime, oTime };
    }

    console.log("Leave time  : " + lTime);
    console.log("Arrive time : " + aTime);
    console.log("Over time   : " + oTime);
    console.log(dataSet);

    const nextDay = dbNextDate.map((data) => {
      return data.presentDate;
    });

    var found;
    for (let i = 0; i < nextDay.length; i++) {
      if (nextDay[i] > todayDate) {
        found = nextDay[i];
      }
    }

    console.log(found);

    // ovetime pays calculation function
    var todayOTPays = CalcOTPays(oTime);
    var TotalOTPays = parseFloat(getOverTime) + todayOTPays;
    var bSalary = parseInt(basicSalary);
    var total = bSalary + TotalOTPays;
    var totOt = TotalOTPays.toFixed(2);
    var totSalary = total.toFixed(2);

    var OverTime = totOt;
    var Total = totSalary;

    if (OverTime == "NaN" && Total == "NaN") {
      console.log("yes");
      OverTime = 0;
      Total = 0;
    }

    const salarySheet = { OverTime, Total };

    console.log(OverTime);
    console.log(Total);
    console.log(salarySheet);

    // update leave time
    if (found == todayDate + 1) {
      axios
        .put(
          "http://localhost:3001/api/Employee/updateLeavetime/" +
            eid +
            "/" +
            found,
          dataSet
        )
        .then(() => {
          console.log("Overtime updated");
          alert("Good Evening");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });

      if (OverTime != 0) {
        axios
          .put(
            "http://localhost:3001/api/Employee/updatesalarysheet/" + eid,
            salarySheet
          )
          .then(() => {
            console.log("Salary sheet updated");
          });
      }
    } else {
      alert("You can't leave twice");
    }
  }

  // get employee profile
  const [employeeName, setEmployeeName] = useState("");

  useEffect(() => {
    function getEmpProfile() {
      axios
        .get("http://localhost:3001/api/Employee/getbyeid/" + eid)
        .then((res) => {
          setEmployeeName(res.data.fName + " " + res.data.lName);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEmpProfile();
  }, []);

  //get Scheduled details
  const [scheduledDetails, setscheduledDetails] = useState([]);
  useEffect(() => {
    function getSchedules() {
      axios
        .get("http://localhost:3001/api/Employee/getschedules/" + eid)
        .then((res) => {
          setscheduledDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSchedules();
  }, []);

  return (
    <div
      className="data1"
      style={{
        width: "60%",
      }}
    >
      <h1 style={{ width: "50%", float: "left" }}>Employee Profile</h1>
      <Link to="/">
        <Button className="logout">Logout</Button>
      </Link>
      <div className="profileUpper">
        <div
          style={{
            width: "50% !important",
            display: "block",
            float: "left",
            paddingTop: "50px",
          }}
        >
          <div className="InputControl1">
            <label>
              <b>Employee ID</b>
            </label>
            <input
              className="empID1"
              type="text"
              disabled
              value={eid}
              style={{ marginLeft: "68px" }}
            />
            <br></br>
          </div>
          <div className="InputControl1">
            <label>
              <b>Employee Name</b>
            </label>
            <input
              className="empID1"
              type="text"
              value={employeeName}
              disabled
            />
            <br></br>
          </div>
          <div className="InputControl1 attendBtns">
            <Button
              className="attend"
              onClick={(e) => {
                getArriveTime(e);
              }}
            >
              Arrive
            </Button>
            <Button
              className="attend leave"
              onClick={(e) => {
                getLeaveTime(e);
              }}
            >
              Leave
            </Button>
          </div>
        </div>
        <div className="profilePicContainer">
          <img className="profilePic" />
          <Button className="btnChanges">Change profile picture</Button>
          <Button className="btnChanges">Change password</Button>
        </div>
      </div>
      <div className="profileUnder">
        <div className="atdiv atdiv2">
          <h2 className="AssignTask ass">Assign Task</h2>

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
                    <td>
                      <Button className="done">DONE</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="payroll1">
          <table class="table table1">
            <tbody>
              <tr>
                <th scope="row">Basic Salary</th>
                <td>{salarySheet.basicSalary}</td>
              </tr>
              <tr>
                <th scope="row">Over Time</th>
                <td>{salarySheet.OverTime}</td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td colspan="2">
                  <b>{salarySheet.Total}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
