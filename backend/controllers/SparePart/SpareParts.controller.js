//implement bussiness logic here
//CRUD functionalities

//import Spare Parts model
const SpareParts = require('../../models/SparePart/SpareParts.model');

//add SpareParts
const addSpareParts = (req, res) => {


   
    const{ sName, sMakes, sModel, sBrands, sPrice, photo} = req.body;

    //create new object
    const newSpareParts = new SpareParts({
        sName,
        sMakes,
        sModel,
        sBrands,
        sPrice,
        photo
    });

    newSpareParts.save().then((SpareParts) => {
        res.json(SpareParts);
    }).catch((err)=>{
        res.json(err);
    });

}

//get all sapre parts
const getAllSpareParts = (req, res)=> {
    
    //get all Spare Parts is by find() method.
    //read mongoose queries
    SpareParts.find().then((SpareParts)=>{
        res.json(SpareParts);
    }).catch((err)=>{
        res.json(err);
    })
}

//update spare parts
const updateSpareParts = (async (req, res) => {
    let SparePartsId = req.params.id;
    const {sName, sMakes, sModel, sBrands, sPrice,} = req.body;

    const updateSpareParts = {
        sName,
        sMakes,
        sModel,
        sBrands,
        sPrice
    }

   await SpareParts.findByIdAndUpdate(SparePartsId, updateSpareParts)
    .then(() => {
        res.status(200).send({status: "Spare Parts Update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ststus: "Error with updating data", error: err.message});
    })
})


//delete spare parts
const deleteSpareParts = (async (req, res) =>{
    let SparePartsId = req.params.id;

    await SpareParts.findByIdAndDelete(SparePartsId)
    .then(() => {
        res.status(200).send({status: "Spare Parts delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Spare Parts"});
    })
})

//get a spare parts
const getSpareParts  = (req, res) => {

    SpareParts.findById(req.params.id).then((SpareParts)=>{
        res.json(SpareParts);
    }).catch((err)=>{
        res.json(err);
    })
}

module.exports = {
    addSpareParts,
    getAllSpareParts,
    updateSpareParts,
    deleteSpareParts,
    getSpareParts
}