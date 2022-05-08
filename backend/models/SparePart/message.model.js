const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const newSSchema = Schema({
    id: String,
    message : String,
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Message = mongoose.model("message", newSSchema);

//export our module to controller
module.exports =Message;