const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

const attendanceSchema = new Schema({
  eid: String,
  date: String,
  aTime: String,
  lTime: String,
  oTime: String,
  presentDate: Number,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const Attendance = mongoose.model('Employee_Attendance', attendanceSchema)

//export our module to controller
module.exports = Attendance
