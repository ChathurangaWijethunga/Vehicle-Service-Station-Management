//implement bussiness logic here
//CRUD functionalities

//import RegisterCustomer  model
const Addshedule = require('../../Models/Customer/AddShedule.model');

//add new Customers
const AddShedule = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {name,service,vehicle,date,time,price} = req.body;

    //create a object

    const newshedule = new Addshedule({
        name,
        service,
        vehicle,
        date,
        time,
        price
        
    });

    newshedule.save().then((shedule) => {
        res.json(shedule);
    }).catch((err)=>{
        res.json(err);
    });

}

const getAllShedules = (req, res)=> {
    
    //get all customers is by find() method.
    //read mongoose queries
    Addshedule.find().then((Addshedule)=>{
        res.json(Addshedule);
    }).catch((err)=>{
        res.json(err);
    })
}

const getonetempshedule =(req,res) =>{
    Addshedule.findById(req.params.id)
    .then((Addshedule)=>res.json(Addshedule)
    ).catch(err => res.status(400).json('Error : ' + err))
}

const tempdeletetshedule = (req, res) => {
    Addshedule.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}




module.exports = {
    AddShedule,
    getAllShedules,
    getonetempshedule,
    tempdeletetshedule
}