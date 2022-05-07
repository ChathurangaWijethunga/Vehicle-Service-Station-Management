import './addEmployee.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const AddEmployee = (props) => {
  // Role Select
  const [role, setRole] = useState(1)

  // Get all employees for count
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    function getEmployee() {
      axios
        .get('http://localhost:3001/api/Employee/all')
        .then((res) => {
          setEmployees(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getEmployee()
  }, [])

  // Get all Managers for count
  const [manager, setManager] = useState([])

  useEffect(() => {
    function getManagers() {
      axios
        .get('http://localhost:3001/api/Employee/allManagers')
        .then((res) => {
          setManager(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getManagers()
  }, [])

  //Generate Employee ID
  const emplen = employees.length
  const idGen = emplen + 1
  const eid = 'EMP00' + idGen

  // Generate Managers ID
  const fmid = 'FINANCE'
  const hmid = 'HR'
  const spmid = 'SPARE-PART'
  const umid = 'UTILITY'
  const mmid = 'MAINTENANCE'
  const smid = 'SERVICES'

  const history = useHistory()

  const [fName, setfName] = useState()
  const [lName, setlName] = useState()
  const [address, setAddress] = useState()
  const [nic, setnic] = useState()
  const [teleNumber, setTeleNumber] = useState()
  const [Mobilenum, setMobileNum] = useState()
  const [email, setemail] = useState()
  const [DOB, setDOB] = useState()
  const [status, setStatus] = useState()
  const [password, setPassword] = useState()

  function sendEmpDetails(e) {
    e.preventDefault()

    const newEmployee = {
      eid,
      fName,
      lName,
      address,
      nic,
      teleNumber,
      Mobilenum,
      email,
      DOB,
      status,
      password,
    }
    axios
      .post('http://localhost:3001/api/Employee/add', newEmployee)
      .then(() => {
        console.log('employee Added')
        alert('Your application successfully send')
        history.push('/tabView')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // send Manager details
  function sendManagerDetails(e, role, already) {
    e.preventDefault()
    var mid = ''
    if (role == 2) {
      mid = fmid
    } else if (role == 3) {
      mid = hmid
    } else if (role == 4) {
      mid = spmid
    } else if (role == 5) {
      mid = umid
    } else if (role == 6) {
      mid = mmid
    } else if (role == 7) {
      mid = smid
    } else mid = 1

    // check manager id equal to the database
    var have = 'false'

    for (let i = 0; i < already.length; i++) {
      if (mid == already[i].mid) {
        have = 'true'
        alert(mid + ' Manager has been already added to the database')
        return -1
      }
    }

    // prevent add the same manager into the database
    if (have == 'false') {
      const newManager = {
        mid,
        fName,
        lName,
        address,
        nic,
        Mobilenum,
        email,
        DOB,
        password,
      }
      axios
        .post('http://localhost:3001/api/Employee/addManager', newManager)
        .then(() => {
          console.log('Manager Added')
          alert('Manager application successfully send')
          history.push('/tabView')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className="Employeedata">
      <div className="dropDown-Manage">
        <div className="InputControl">
          <label>
            <b>Employee ID</b>
          </label>
          <input
            className="empID"
            type="text"
            disabled
            style={{ marginLeft: '68px' }}
            value={
              role == 1
                ? eid
                : role == 2
                ? fmid
                : role == 3
                ? hmid
                : role == 4
                ? spmid
                : role == 5
                ? umid
                : role == 6
                ? mmid
                : role == 7
                ? smid
                : eid
            }
          />
          <br></br>
        </div>
        <select
          class="form-select form-select-sm role-select roles"
          aria-label=".form-select-sm example"
          onChange={(e) => {
            setRole(e.target.value)
          }}
        >
          <option className="roles" value="1" selected>
            Employee
          </option>
          <option className="roles" value="2">
            Finance Manager
          </option>
          <option className="roles" value="3">
            Human Resources Manager
          </option>
          <option className="roles" value="4">
            Spare-Parts Manager
          </option>
          <option className="roles" value="5">
            Utility Manager
          </option>
          <option className="roles" value="6">
            Maintenance Manager
          </option>
          <option className="roles" value="7">
            Services Manager
          </option>
        </select>
      </div>

      <div className="fControl">
        <form
          className="empAddForm"
          onSubmit={(e) => {
            if (role == 1) {
              sendEmpDetails(e)
            } else {
              sendManagerDetails(e, role, manager)
            }
          }}
        >
          <h4 className="infoTitle">Personal Information</h4>
          <div className="personalInfo">
            <div className="mb-3">
              <label for="Fname" class="form-label">
                First Name
              </label>
              <input
                placeholder="First Name"
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="Fname"
                onChange={(e) => {
                  setfName(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label for="Lname" class="form-label">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="Lname"
                onChange={(e) => {
                  setlName(e.target.value)
                }}
              />
            </div>
            <div class="mb-3 input">
              <label for="address" className="form-label">
                Address
              </label>
              <input
                placeholder="Address"
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
            </div>
            <div class="mb-3">
              <label for="nic" class="form-label">
                NIC
              </label>
              <input
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="nic"
                onChange={(e) => {
                  setnic(e.target.value)
                }}
              />
            </div>
          </div>
          <h4 className="infoTitle contact">Contact Information</h4>
          <div className="personalInfo">
            <div class={'mb-3' + ' ' + (role == 1 ? '' : 'hide')}>
              <label for="phone" class="form-label">
                TelePhone
              </label>
              <input
                type="phone"
                className="form-control empF-con empUpdateInputs"
                id="phone"
                onChange={(e) => {
                  setTeleNumber(e.target.value)
                }}
              />
            </div>
            <div class="mb-3">
              <label for="mobile" class="form-label">
                Mobile
              </label>
              <input
                type="phone"
                className="form-control empF-con empUpdateInputs"
                id="mobile"
                onChange={(e) => {
                  setMobileNum(e.target.value)
                }}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control empF-con empUpdateInputs"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label for="email" class="form-label">
                Date of Birth
              </label>
              <br></br>
              <input
                type="date"
                onChange={(e) => {
                  setDOB(e.target.value)
                }}
              />
            </div>
            <div className={role == 1 ? '' : 'hide'}>
              <label>Status</label>
              <div className="mb-3">
                <input
                  type="radio"
                  name="status"
                  defaultValue="Unmarried"
                  onChange={(e) => {
                    setStatus(e.target.value)
                  }}
                />
                <label>Unmarried</label>
                <input
                  type="radio"
                  name="status"
                  className="status"
                  defaultValue="Married"
                  onChange={(e) => {
                    setStatus(e.target.value)
                  }}
                />
                <label>Married</label>
              </div>
            </div>
          </div>
          <h4 className="infoTitle contact">Employee Credentials</h4>
          <div className="personalInfo">
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="username"
                value={fName}
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control empF-con empUpdateInputs"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <Link to="/tabView">
              <button className="btn Btn btn-primary cancel">CANCEL</button>
            </Link>
           <button type="submit"  className="btn Btn btn-primary update">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddEmployee
