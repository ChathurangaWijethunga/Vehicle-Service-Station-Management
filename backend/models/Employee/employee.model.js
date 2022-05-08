const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

const employeeSchema = new Schema({
  eid: String,
  fName: String,
  lName: String,
  address: String,
  nic: String,
  teleNumber: Number,
  Mobilenum: Number,
  email: String,
  DOB: Date,
  status: String,
  password: String,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const Employee = mongoose.model('Employee', employeeSchema)

//export our module to controller
module.exports = Employee
