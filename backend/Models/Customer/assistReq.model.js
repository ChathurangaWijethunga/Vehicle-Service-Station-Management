const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newAssistReqSchema = new Schema({
    userName: String,
    userMobile: String,
    userAddress: String,
    latitude: Number,
    longitude: Number,
    urgent: Boolean,
    problemDetail: String
});

const AssistReq = mongoose.model("AssistReq", newAssistReqSchema);

module.exports = AssistReq;