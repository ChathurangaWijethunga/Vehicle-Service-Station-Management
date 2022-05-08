const express = require('express')
const router = express.Router()

// Import Employee methods
const {
  addEmployee,
  getAllEmployees,
  getOneEmployees,
  getOnebyempID,
  DeleteEmployee,
  UpdateEmployee,
  updateEmployeeEID,
  checkLoginEmployee,
} = require('../../controllers/Employee/emloyee.controller')

// Import Manager methods
const {
  addManager,
  getAllManagers,
  checkLoginManager,
} = require('../../controllers/Employee/manager.controller')

// Import Attendance methods
const {
  addAttendee,
  getAllAttendee,
  setLeave,
  getoneAttendee,
  getAllAttendeebyID,
} = require('../../controllers/Employee/attendance.controller')

// Import salary sheets methods
const {
  addEmpSalary,
  getOneSalarySheet,
  updateSalarySheetByeid,
} = require('../../controllers/Employee/employee_salary.controller')

// Import Schedule methods
const {
  getSchedulesByEID,
} = require('../../controllers/Employee/schedule.controller')

//http://localhost:3001/api/Employee/add
//if call above url with post method addCustomer method will be called
// Employee routes
router.post('/add', addEmployee)
router.get('/all', getAllEmployees)
router.get('/one/:id', getOneEmployees)
router.get('/getbyeid/:id', getOnebyempID)
router.delete('/delete/:id', DeleteEmployee)
router.put('/update/:id', UpdateEmployee)
router.put('/updateEID/:id', updateEmployeeEID)
router.post('/loginEmployee', checkLoginEmployee)

//Manager routes
router.post('/addManager', addManager)
router.get('/allManagers', getAllManagers)
router.post('/loginManager', checkLoginManager)

//Attendance routes
router.post('/addAttendee', addAttendee)
router.get('/allAttendee', getAllAttendee)
router.put('/updateLeavetime/:id/:nextDate', setLeave)
router.get('/oneAttendee/:id', getoneAttendee)
router.get('/allAttendee/:id', getAllAttendeebyID)

//Employee Salary sheet routes
router.post('/addempsalarysheet', addEmpSalary)
router.get('/getasalarysheet/:id', getOneSalarySheet)
router.put('/updatesalarysheet/:id', updateSalarySheetByeid)

//Scheduled details
router.get('/getschedules/:id', getSchedulesByEID)

module.exports = router
