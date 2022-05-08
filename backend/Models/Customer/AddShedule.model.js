const mongoose = require('mongoose')
const cors = require('cors')

//now create the schema
const { Schema } = mongoose

const AddShedule = new Schema({
  name: String,
  service: String,
  vehicle: String,
  date: Date,
  time: String,
  price: String,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
// const Addshedule = mongoose.model("Registered_Shedules",AddShedule);

//export our module to controller
// module.exports = Addshedule ;
