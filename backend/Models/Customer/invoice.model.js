const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const itemListSchema = new Schema({
    itemName:String,
    qty:Number,
    unitPrice:Number
});

const newInvoiceSchema = new Schema({
    invoiceNo:String,
    serviceDate:Date,
    customerName:String,
    serviceVehicle:String,
    jobDoneBy:String,
    totalAmount:String,
    itemList:[itemListSchema]
});

const Invoice = mongoose.model("Invoice",newInvoiceSchema);

module.exports = Invoice;