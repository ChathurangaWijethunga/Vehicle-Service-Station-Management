const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

//add sapre parts
const newSSchema = Schema({
    sName : String,
    sMakes: String,
    sModel : String,
    sBrands : String,
    sPrice : String,
    photo : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const SparePart = mongoose.model("SparePart", newSSchema);

//export our module to controller
module.exports =SparePart;