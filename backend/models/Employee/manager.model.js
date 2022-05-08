const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

const managerSchema = new Schema({
  mid: String,
  fName: String,
  lName: String,
  address: String,
  nic: String,
  Mobilenum: Number,
  email: String,
  DOB: Date,
  password: String,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const Manager = mongoose.model('Manager', managerSchema)

//export our module to controller
module.exports = Manager
