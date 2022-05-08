const express = require('express')
const router = express.Router()

const {
  addEarnings,
  addEarningsBackup,
  getEarnings,
  addOutgoings,
  getoutgoings,
  getShedules,
  getaShedule,
  updateBillDetails,
  deleteEarHistory,
  addCardDetails,
  getCardDetails,
} = require('../../controllers/Finance/finance.controller')

//http://localhost:3001/api/payments/addearnings
router.post('/addearnings', addEarnings)
router.delete('/deleteEarnings/:ps', deleteEarHistory)
router.post('/backupearnings', addEarningsBackup)
router.get('/getearnings', getEarnings)
router.post('/addoutgoings', addOutgoings)
router.get('/getoutgoings', getoutgoings)
router.get('/getallpendings', getShedules)
router.get('/getapending/:id', getaShedule)
router.put('/update/:id', updateBillDetails)
router.post('/insertCardDetails', addCardDetails)
router.post('/cardDetails', getCardDetails)

module.exports = router
