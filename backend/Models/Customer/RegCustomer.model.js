const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const registercustomer = new Schema({
    name : String,
    Email : String,
    password : String,
    pnum : String,
    vehicle : String,
    nic : String,

});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Rcustomer = mongoose.model("Registered_Customers",registercustomer);

//export our module to controller
module.exports = Rcustomer ;