const mongoose = require('mongoose');

const cors = require('cors');

const { Schema } = mongoose;

const taskSchema = new Schema({taskType:String, taskList:[String]});

const newSchedule = new Schema({
    schName: String,
    schMobile: String,
    schVehicle: String,
    schDate: Date,
    taskDetails:taskSchema,
    scheduledTime:String,
    assignedEmployee:String
});

const ScheduleService = mongoose.model("ScheduleService", newSchedule);

module.exports = ScheduleService;