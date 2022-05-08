const express = require('express');
const router = express.Router();


const {
    checkLoginCustomer,
    RegCustomer,
    getAllCustomers, 
    getonetempcustomer,
    Updatecustomer,
    tempdeletetcustomer,
    getOnebycusID
} = require('../../Controller/Customer/RegCustomer.controller');

router.post("/loginme", checkLoginCustomer);
router.post("/registercustomer",RegCustomer);
router.get("/all",getAllCustomers);
router.get("/tempone/:id",getonetempcustomer);
router.put("/update/:id",Updatecustomer);
router.delete("/tempdelete/:id",tempdeletetcustomer);
router.get("/getbyid/:id",getOnebycusID);

const {

    getAllShedules,
    getonetempshedule,
    AddShedule,
    tempdeletetshedule   
} = require('../../Controller/Customer/AddShedule.contoller');

router.post("/AddShedule",AddShedule);
router.get("/get",getAllShedules);
router.put("/update/:id",getonetempshedule);
router.delete("/delete/:id", tempdeletetshedule);


module.exports = router;