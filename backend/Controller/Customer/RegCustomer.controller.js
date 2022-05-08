//implement bussiness logic here
//CRUD functionalities

//import RegisterCustomer  model
const Rcustomer = require('../../Models/Customer/RegCustomer.model');

//add new Customers
const RegCustomer = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {name,password,Email,pnum,vehicle,nic,confirmpassword} = req.body;

    //create a object

    const newregcustomer = new Rcustomer({
            name,
            password,
            Email,
            pnum,
            vehicle,
            nic,
        
    });

    newregcustomer.save().then((customer) => {
        res.json(customer);
    }).catch((err)=>{
        res.status(400).res.json(err);
    });

}

const getAllCustomers = (req, res)=> {
    
    //get all customers is by find() method.
    //read mongoose queries
    Rcustomer.find().then((Rcustomer)=>{
        res.json(Rcustomer);
    }).catch((err)=>{
        res.json(err);
    })
}

const getonetempcustomer =(req,res) =>{
    Rcustomer.findById(req.params.id)
    .then((Rcustomer)=>res.json(Rcustomer)
    ).catch(err => res.status(400).json('Error : ' + err))
}

const Updatecustomer = (req, res)=>{
    
    const {name,pnum,Email,nic,vehicle} = req.body

    const dataset = {name,pnum,Email,nic,vehicle}
    
    Rcustomer.findByIdAndUpdate(req.params.id,dataset)
    .then((Rcustomer) => res.json(dataset))
    .catch(err => res.status(400).json('Error : ' + err));
}


const tempdeletetcustomer = (req, res) => {
    Rcustomer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

// customer get by custom id
const getOnebycusID = (req, res) => {
    let id = req.params.id
  
    Rcustomer.findOne({ eid: id })
      .then((Rcustomer) => {
        res.json(Rcustomer)
      })
      .catch((err) => {
        res.json(err)
      })
  }

  const checkLoginCustomer = (req, res) => {
    const Email = req.body.Email;
    const password = req.body.password;

    Rcustomer.find({Email:Email}).then((Rcustomer) => {
        if((!Rcustomer[0]) || (Rcustomer[0].password != password)) {
            res.json('Invalid Email or Password');
        }
        else {
            res.json('Login Successfull');
        }
    }).catch((err) => {
        res.json(err);
    })

}

module.exports = {
    RegCustomer,
    getAllCustomers,
    getonetempcustomer,
    Updatecustomer,
    tempdeletetcustomer,
    getOnebycusID,
    checkLoginCustomer
}