const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const newSSchema = Schema({
    type : String,
    oBrand: String,
    oVolumetricCapacity : String,
    oSKU: String,
    oPrice : String,
    photo : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Oills = mongoose.model("Oill", newSSchema);

//export our module to controller
module.exports =Oills;