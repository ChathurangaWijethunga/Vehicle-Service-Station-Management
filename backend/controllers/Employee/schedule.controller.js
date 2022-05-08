// import schedule model
const ScheduleService = require('../../models/Customer/schedule.model')

// get all Schedule details
const getSchedulesByEID = (req, res) => {
  let _id = req.params.id
  //read mongoose queries
  ScheduleService.find({ assignedEmployee: _id })
    .then((ScheduleService) => {
      res.json(ScheduleService)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = { getSchedulesByEID }
