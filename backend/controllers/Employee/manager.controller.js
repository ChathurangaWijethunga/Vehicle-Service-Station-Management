//Manager CRUD functionalities

//import Manager model
const Manager = require('../../models/Employee/manager.model')

//add Employee
const addManager = (req, res) => {
  const {
    mid,
    fName,
    lName,
    address,
    nic,
    Mobilenum,
    email,
    DOB,
    password,
  } = req.body

  //create a object

  const newManager = new Manager({
    mid,
    fName,
    lName,
    address,
    nic,
    Mobilenum,
    email,
    DOB,
    password,
  })

  newManager
    .save()
    .then((Manager) => {
      res.json(Manager)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getAllManagers = (req, res) => {
  //get all Employees is by find() method.
  //read mongoose queries
  Manager.find()
    .then((Manager) => {
      res.json(Manager)
    })
    .catch((err) => {
      res.json(err)
    })
}

const checkLoginManager = (req, res) => {
  const logUsername = req.body.logUserName;
  const logPassword = req.body.logpw;

  Manager.find({fName:logUsername}).then((Manager) => {
    if((!Manager[0]) || (Manager[0].password != logPassword)) {
      res.json('Invalid Username or Password');
    }

    else {
      res.json(Manager[0].mid);
    }

  }).catch((err) => {
    res.json(err);
  })
}

module.exports = { addManager, getAllManagers, checkLoginManager }
