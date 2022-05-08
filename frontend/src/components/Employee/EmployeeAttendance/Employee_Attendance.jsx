import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./employeeAttendance.css";

const EmpAttendance = (props) => {
  const [allAttendee, setallAttendee] = useState([]);

  useEffect(() => {
    function getAllAttendee() {
      axios
        .get("http://localhost:3001/api/Employee/allAttendee")
        .then((res) => {
          setallAttendee(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllAttendee();
  });

  return (
    <div className="Employeedata" style={{ minHeight: "400px" }}>
      <div className="tableControl">
        <Table className='EmpAttendanceTable' striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Date</th>
              <th>Arrive Time</th>
              <th>Leave Time</th>
              <th>OverTime</th>
            </tr>
          </thead>
          <tbody>
            {allAttendee.map((data) => (
              <tr>
                <td>{data.eid}</td>
                <td>{data.date}</td>
                <td>{data.aTime}</td>
                <td>{data.lTime}</td>
                <td>{data.oTime}</td>
              </tr>
              
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default EmpAttendance;
