//implement bussiness logic here
//CRUD functionalities

//import mechanical maintenance model
const {
  earningsModel,
  outgoingModel,
  sheduleModel,
  earningsBackupModel,
  cardDetailsModel,
} = require('../../models/Finance/payment.model')

//add earnings
const addEarnings = (req, res) => {
  // pass the data in one line
  const { itemName, price, paidStatus, method } = req.body

  //create a object
  const earn = new earningsModel({
    itemName,
    price,
    paidStatus,
    method,
  })

  earn
    .save()
    .then((earn) => {
      res.json(earn)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All earnings from database
const getEarnings = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  earningsModel
    .find()
    .then((earningsModel) => {
      res.json(earningsModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//add outgoings
const addOutgoings = (req, res) => {
  // pass the data in one line
  const { itemName, price } = req.body

  //create a object

  const out = new outgoingModel({
    itemName,
    price,
  })

  out
    .save()
    .then((out) => {
      res.json(out)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All earnings from database
const getoutgoings = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  outgoingModel
    .find()
    .then((outgoingModel) => {
      res.json(outgoingModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getShedules = (req, res) => {
  //get all customers is by find() method.
  //read mongoose queries
  sheduleModel
    .find()
    .then((shedule) => {
      res.json(shedule)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getaShedule = (req, res) => {
  sheduleModel
    .findById(req.params.id)
    .then((sheduleModel) => res.json(sheduleModel))
    .catch((err) => res.status(400).json('Error : ' + err))
}

// update after bill payment
const updateBillDetails = (req, res) => {
  let uid = req.params.id
  const { paidStatus, cash, balance } = req.body

  const updateShedule = { paidStatus, cash, balance }

  const update = sheduleModel
    .findByIdAndUpdate(uid, updateShedule)
    .then(() => {
      res.status(200).send({ status: 'Details updated', details: update })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: 'Error with updating' })
    })
}

//add earnings to backup
const addEarningsBackup = (req, res) => {
  // pass the data in one line
  const { itemName, price, paidStatus, method } = req.body

  //create a object

  const earn = new earningsBackupModel({
    itemName,
    price,
    paidStatus,
    method,
  })

  earn
    .save()
    .then((earn) => {
      res.json(earn)
    })
    .catch((err) => {
      res.json(err)
    })
}

// delete earning history
const deleteEarHistory = (req, res) => {
  let paidStatus = req.params.ps

  let deleteThis = { paidStatus }

  console.log(deleteThis)

  earningsModel.findOneAndDelete(deleteThis, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log('Delete User : ', docs)
    }
  })
}

//add card details
const addCardDetails = (req, res) => {
  // pass the data in one line
  const { payid, owner, cardnumber, cvv, year, month } = req.body

  //create a object
  const cardDetails = new cardDetailsModel({
    payid,
    owner,
    cardnumber,
    cvv,
    year,
    month,
  })

  cardDetails
    .save()
    .then((cardDetails) => {
      res.json(cardDetails)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get card details
const getCardDetails = (req, res) => {
  const crdno1 = req.body.cardnumber1

  cardDetailsModel
    .find({ cardnumber: crdno1 })
    .then((cardDetailsModel) => {
      if (!cardDetailsModel[0]) {
        res.json('no')
      } else {
        res.json('Yes Card is on database')
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  addEarnings,
  addEarningsBackup,
  deleteEarHistory,
  getEarnings,
  addOutgoings,
  getoutgoings,
  getShedules,
  getaShedule,
  updateBillDetails,
  addCardDetails,
  getCardDetails,
}
