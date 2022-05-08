const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

// model for earnings
const earningsSchema = new Schema({
  itemName: String,
  price: String,
  paidStatus: String,
  method: String,
})

// model for outgoings
const outgoingSchema = new Schema({
  itemName: String,
  price: String,
})

// const SheduleSchema = new Schema({
//   name: String,
//   service: String,
//   maintenance: String,
//   vehicle: String,
//   date: Date,
//   time: String,
//   paidStatus: String,
//   cash: String,
//   balance: String,
// })

const CardDetailsSchema = new Schema({
  payid: String,
  owner: String,
  cardnumber: String,
  cvv: String,
  year: String,
  month: String,
})
//convert schema into a model
//1st para = collection name, 2nd = schema
const earningsModel = mongoose.model('earnings', earningsSchema)

const earningsBackupModel = mongoose.model('earningsBackup', earningsSchema)

const outgoingModel = mongoose.model('outgoings', outgoingSchema)

// const sheduleModel = mongoose.model('Registered_Shedules', SheduleSchema)

const cardDetailsModel = mongoose.model('cardDetails', CardDetailsSchema)

module.exports = {
  earningsModel,
  earningsBackupModel,
  outgoingModel,
  // sheduleModel,
  cardDetailsModel,
}
