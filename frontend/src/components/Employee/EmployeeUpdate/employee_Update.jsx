import './empUpdate.css'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EmpUpdate = (props) => {
  const { id } = useParams()
  const history = useHistory()
  const [employee, setEmployee] = useState([])

  const [fName, setFname] = useState()
  const [lName, setLname] = useState()
  const [address, setAddress] = useState()
  const [nic, setNic] = useState()
  const [Mobilenum, setMobilenum] = useState()
  const [email, setEmail] = useState()

  console.log(fName, lName, address, nic, Mobilenum, email)

  useEffect(() => {
    function getEmployee() {
      axios
        .get('http://localhost:3001/api/Employee/one/' + id)
        .then((res) => {
          setEmployee(res.data)

          setFname(res.data.fName)
          setLname(res.data.lName)
          setAddress(res.data.address)
          setNic(res.data.nic)
          setMobilenum(res.data.Mobilenum)
          setEmail(res.data.email)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getEmployee()
  }, [])
  function EmployeeUpdated(e) {
    e.preventDefault()
    const detailsSet = {
      fName,
      lName,
      address,
      nic,
      Mobilenum,
      email,
    }

    axios
      .put('http://localhost:3001/api/employee/update/' + id, detailsSet)
      .then(() => {
        alert('Employee Updated')
        history.push('/tabView')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="Employeedata">
      <div style={{ width: '50%', marginTop: '30px', marginLeft: '100px' }}>
        <div className="InputControl">
          <label>
            <b>Employee ID</b>
          </label>
          <input
            className="empID"
            type="text"
            disabled
            style={{ marginLeft: '68px' }}
            defaultValue={employee.eid}
          />
          <br></br>
        </div>
      </div>

      <div className="fControl">
        <form
          className="empUpdateForm"
          onSubmit={(e) => {
            EmployeeUpdated(e)
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
                className="form-control empUpdateInputs"
                id="firstname"
                defaultValue={employee.fName}
                onChange={(e) => {
                  setFname(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label for="lastname" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control empUpdateInputs"
                id="lastname"
                defaultValue={employee.lName}
                onChange={(e) => {
                  setLname(e.target.value)
                }}
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                placeholder="House No, Street, City"
                type="text"
                className="form-control empUpdateInputs"
                id="address"
                defaultValue={employee.address}
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
                className="form-control empUpdateInputs"
                id="nic"
                defaultValue={employee.nic}
                onChange={(e) => {
                  setNic(e.target.value)
                }}
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
                className="form-control empUpdateInputs"
                id="phone"
                defaultValue={employee.Mobilenum}
                onChange={(e) => {
                  setMobilenum(e.target.value)
                }}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control empUpdateInputs"
                id="email"
                aria-describedby="emailHelp"
                defaultValue={employee.email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <Link to="/tabView">
              <button className="btn Btn btn-primary cancel">CANCEL</button>
            </Link>
            <button type="submit" className="btn Btn btn-primary update">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default EmpUpdate
