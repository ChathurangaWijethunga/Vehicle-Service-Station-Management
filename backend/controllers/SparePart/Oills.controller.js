//implement bussiness logic here
//CRUD functionalities

//import Oill model
const Oills = require('../../models/SparePart/Oills.model');

//add Oill
const addOills = (req, res) => {


   
    const{ type, oBrand, oVolumetricCapacity, oSKU, oPrice, photo} = req.body;

    //create a object

    const newOills = new Oills({
        type,
        oBrand,
        oVolumetricCapacity,
        oSKU,
        oPrice,
        photo
    });

    newOills.save().then((Oills) => {
        res.json(Oills);
    }).catch((err)=>{
        res.json(err);
    });

}

const getAllOills = (req, res)=> {
    
    //get all Oill is by find() method.
    //read mongoose queries
    Oills.find().then((Oills)=>{
        res.json(Oills);
    }).catch((err)=>{
        res.json(err);
    })
}

const updateOills = (async (req, res) => {
    let OillsId = req.params.id;
    const {type, oBrand, oVolumetricCapacity, oSKU, oPrice,photo } = req.body;

    const updateOill = {
        type,
        oBrand,
        oVolumetricCapacity,
        oSKU,
        oPrice,
        photo
    }

    const updateOil = await Oills.findByIdAndUpdate(OillsId, updateOill)
    .then(() => {
        res.status(200).send({status: "Oill Update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ststus: "Error with updating data", error: err.message});
    })
})

const deleteOills = (async (req, res) =>{
    let OillsId = req.params.id;

    await Oills.findByIdAndDelete(OillsId)
    .then(() => {
        res.status(200).send({status: "Oill delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Oill"});
    })
})

const getOills = (req, res) => {


    Oills.findById(req.params.id).then((Oills)=>{
        res.json(Oills);
    }).catch((err)=>{
        res.json(err);
    })
}

   
module.exports = {
    addOills,
    getAllOills,
    updateOills,
    deleteOills,
    getOills
}