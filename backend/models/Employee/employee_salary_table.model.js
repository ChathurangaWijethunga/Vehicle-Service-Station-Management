const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

const salaryTableSchema = new Schema({
  eid: String,
  basicSalary: String,
  OverTime: String,
  Total: String,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const salary = mongoose.model('Employee_salary', salaryTableSchema)

//export our module to controller
module.exports = salary
