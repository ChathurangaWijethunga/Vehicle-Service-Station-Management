const express = require('express');
const router = express.Router();
const upload = require('../models/SparePart/upload');

const {
    addSpareParts, 
    getAllSpareParts, 
    updateSpareParts,
    deleteSpareParts, 
    getSpareParts 
} = require('../controllers/SparePart/SpareParts.controller');

const {
    addOills,
    getAllOills,
    updateOills,
    deleteOills, 
    getOills, 
} = require('../controllers/SparePart/Oills.controller');

const{
    getImages,
    deleteImages,
} = require("../controllers/SparePart/upload");

const{
    sentMesg,
    getMessages,
} = require("../controllers/SparePart/message.contoller")

//image upload
router.post("/upload", upload.single("file"), (req, res)=>{

    if(`${req.file.bucketName}`==="file"){
         return res.send("you must select a file, select Images");
    }
    else{
    const url=`http://localhost:3001/SpareParts/images/${req.file.filename}`;
    return res.json(url);
    }
});

router.get("/images/:filename", getImages);
router.delete("/images/delete/:filename", deleteImages);

//Spare Parts
router.post("/add", addSpareParts);
router.get("/all", getAllSpareParts);
router.put("/update/:id", updateSpareParts);
router.delete("/delete/:id",deleteSpareParts);
router.get("/get/:id",getSpareParts);

//Oills
router.post("/add/oil", addOills);
router.get("/all/oil", getAllOills);
router.put("/update/oil/:id", updateOills);
router.delete("/delete/oil/:id",deleteOills);
router.get("/get/oil/:id",getOills);

//sent message
router.post("/message",sentMesg);

module.exports = router;