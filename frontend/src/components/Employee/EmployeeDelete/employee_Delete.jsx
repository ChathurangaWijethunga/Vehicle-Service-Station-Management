import "./empDelete.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const EmpDelete = (props) => {
  const { id } = useParams();

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    function getEmployee() {
      axios
        .get("http://localhost:3001/api/Employee/one/" + id)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEmployee();
  }, []);

  const history = useHistory();

  // function for split the Employee id
  function splitPID(ppp) {
    let TOarr = [];
    const intoCharArray = ppp.split("");
    console.log(intoCharArray);

    //get numbers to array
    for (let i = 5; i < intoCharArray.length; i++) {
      const ele = intoCharArray[i];

      for (let j = 0; j <= ele[j]; j++) {
        TOarr.push(ele[j]);
      }
    }

    let plus = "";
    //plus numbers
    for (let i = 0; i < TOarr.length; i++) {
      plus += TOarr[i];
    }
    return [Number(plus)];
  }

  const [count, setCount] = useState(Number);

  useEffect(() => {
    function getCount() {
      axios.get("http://localhost:3001/api/employee/all").then((res) => {
        const c = res.data;
        const cc = c.length;
        setCount(cc);
      });
    }
    getCount();
  });

  function EmpDelete(e, empid) {
    e.preventDefault();
    axios
      .delete("http://localhost:3001/api/Employee/delete/" + id)
      .then((res) => {
        //after deleted the employee, update the id
        //find for update to id
        let looping = count - 1;
        console.log(looping);
        if (looping == 0) {
          alert("Employee deleted");
          history.push("/TabView");
        }
        for (let i = 1; i <= looping; i++) {
          const CurrentIDNumber = empid[0] + i;
          const CurrentID = "EMP00" + CurrentIDNumber;
          const nextIDNumber = CurrentIDNumber - 1;
          const eid = "EMP00" + nextIDNumber;
          const dataset = { eid };

          axios
            .put(
              "http://localhost:3001/api/employee/updateEID/" + CurrentID,
              dataset
            )
            .then(() => {
              if (i == looping) {
                console.log("id Updated");
                alert("Employee deleted");
                history.push("/TabView");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //----------------------------------------------------------------------------------------------------------------------

  return (
    <div className="Employeedata">
      <div style={{ width: "50%", marginTop: "30px", marginLeft: "100px" }}>
        <div className="InputControl">
          <label>
            <b>Employee ID</b>
          </label>

          <input
            className="empID"
            type="text"
            disabled
            style={{ marginLeft: "68px" }}
            defaultValue={employee.eid}
          />

          <br></br>
        </div>
      </div>

      <div className="fControl">
        <form
          className="empDeleteForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h4 className="infoTitle">Personal Information</h4>
          <div className="personalInfo">
            <div className="mb-3">
              <label for="firstname" class="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control empDeleteInputs"
                id="firstname"
                disabled
                defaultValue={employee.fName}
              />
            </div>
            <div className="mb-3">
              <label for="lastname" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control empDeleteInputs"
                id="lastname"
                disabled
                defaultValue={employee.lName}
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control empDeleteInputs"
                id="address"
                disabled
                value={employee.address}
              />
            </div>
            <div class="mb-3">
              <label for="nic" class="form-label">
                NIC
              </label>
              <input
                type="text"
                className="form-control empDeleteInputs"
                id="nic"
                disabled
                defaultValue={employee.nic}
              />
            </div>
          </div>
          <h4 className="infoTitle contact">Contact Information</h4>
          <div className="personalInfo">
            <div class="mb-3">
              <label for="phone" class="form-label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form-control empDeleteInputs"
                id="phone"
                disabled
                defaultValue={employee.Mobilenum}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control empDeleteInputs"
                id="email"
                aria-describedby="emailHelp"
                disabled
                defaultValue={employee.email}
              />
            </div>
            <Link to="/tabView">
              <button className="btn Btn btn-primary cancel">CANCEL</button>
            </Link>
            <button
              type="submit"
              className="btn Btn btn-primary update"
              onClick={(e) => {
                const idNumber = splitPID(employee.eid);

                EmpDelete(e, idNumber);
              }}
            >
              DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmpDelete;
