//Employee CRUD functionalities

//import Employee model
const Employee = require('../../models/Employee/employee.model')

//add Employee
const addEmployee = (req, res) => {
  const {
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
  } = req.body

  //create a object

  const newEmployee = new Employee({
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
  })

  newEmployee
    .save()
    .then((Employee) => {
      res.json(Employee)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getAllEmployees = (req, res) => {
  //get all Employees is by find() method.
  //read mongoose queries
  Employee.find()
    .then((Employee) => {
      res.json(Employee)
    })
    .catch((err) => {
      res.json(err)
    })
}
const getOneEmployees = (req, res) => {
  //get one Employees is by find() method.
  //read mongoose queries
  Employee.findById(req.params.id)
    .then((Employee) => {
      res.json(Employee)
    })
    .catch((err) => {
      res.status(400).json('Err:' + err)
    })
}

// employee get by custom id
const getOnebyempID = (req, res) => {
  let id = req.params.id

  Employee.findOne({ eid: id })
    .then((Employee) => {
      res.json(Employee)
    })
    .catch((err) => {
      res.json(err)
    })
}

const DeleteEmployee = (req, res) => {
  //get Delete Employees is by find() method.
  //read mongoose queries
  Employee.findByIdAndDelete(req.params.id)
    .then((Employee) => {
      res.json(Employee)
    })
    .catch((err) => {
      res.status(400).json('Err:' + err)
    })
}

const UpdateEmployee = (req, res) => {
  let _id = req.params.id
  const { fName, lName, address, nic, Mobilenum, email } = req.body

  const empList = {
    fName,
    lName,
    address,
    nic,
    Mobilenum,
    email,
  }

  Employee.findByIdAndUpdate(_id, empList)
    .then((Employee) => {
      res.json(empList)
    })
    .catch((err) => {
      res.status(400).json('Err:' + err)
    })
}

// when delete the employee, update the employeeId id
const updateEmployeeEID = (req, res) => {
  const _id = req.params.id
  const EID = req.body

  Employee.findOneAndUpdate({ eid: _id }, EID)
    .then(() => {
      res.json('Employee id updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

const checkLoginEmployee = (req, res) => {
  const logUsername = req.body.logUserName
  const logPassword = req.body.logpw

  Employee.find({ eid: logUsername })
    .then((Employee) => {
      if (!Employee[0] || Employee[0].password != logPassword) {
        res.json('Invalid Username or Password')
      } else {
        res.json('Login Successfull')
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  addEmployee,
  getAllEmployees,
  getOneEmployees,
  getOnebyempID,
  DeleteEmployee,
  UpdateEmployee,
  checkLoginEmployee,
  updateEmployeeEID,
}
