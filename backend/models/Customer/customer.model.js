const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const newCustomerSchema = new Schema({
    cusName: String,
    cusMobile: String,
    cusNic: String,
    cusAddress: String,
    password: String,
    vehicle: [String]
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Customer = mongoose.model("Customer", newCustomerSchema);

//export our module to controller
module.exports = Customer;