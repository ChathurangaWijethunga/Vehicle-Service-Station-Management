//Attendance CRUD functionalities

//import Attendance model
const Attendance = require('../../models/Employee/attendance.model')

//add Employee
const addAttendee = (req, res) => {
  const { eid, date, aTime, lTime, oTime, presentDate } = req.body

  //create a object

  const newAttendee = new Attendance({
    eid,
    date,
    aTime,
    lTime,
    oTime,
    presentDate,
  })

  newAttendee
    .save()
    .then((Attendance) => {
      res.json(Attendance)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getAllAttendee = (req, res) => {
  //get all Employees is by find() method.
  //read mongoose queries
  Attendance.find()
    .then((Attendance) => {
      res.json(Attendance)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getAllAttendeebyID = (req, res) => {
  //get all Employees is by find() method.
  //read mongoose queries
  let eid = req.params.id
  Attendance.find({ eid: eid })
    .then((Attendance) => {
      res.json(Attendance)
    })
    .catch((err) => {
      res.json(err)
    })
}

//update attendee
const setLeave = (req, res) => {
  let eid = req.params.id
  let presentDate = req.params.nextDate

  const { lTime, oTime } = req.body

  const updatedDataSet = { lTime, oTime }

  Attendance.findOneAndUpdate(
    { eid: eid, presentDate: presentDate },
    updatedDataSet,
  )
    .then((Attendance) => {
      res.json(Attendance)
    })
    .catch((err) => {
      res.json(err)
    })
}

// get one attendee by id
const getoneAttendee = (req, res) => {
  let eid = req.params.id

  Attendance.findOne({ eid: eid })
    .then((Attendance) => {
      res.json(Attendance)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  addAttendee,
  getAllAttendee,
  setLeave,
  getoneAttendee,
  getAllAttendeebyID,
}
