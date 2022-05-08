import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import updatecustomerlist from "../Cus_details/details";


        const Updatecustomer = (props) => {

            const{id} = useParams()
            const history = useHistory()
            const url = ''
            const [customer, setCustomer] = useState ([])
            
            console.log(id)
            
         
            const[name,setname] = useState()
            const[pnum,setpnum] = useState()
            const[Email,setEmail] = useState()
            const[nic,setnic] = useState()
            const[vehicle,setvehicle] = useState()



            useEffect(()=>{
                let getCustomer = () =>{
                    axios.get('http://localhost:3001/api/Customer/tempone/'+id)
                    .then((res) =>{
                      setCustomer(res.data)

                        setname(res.data.name)
                        setpnum(res.data.pnum)
                        setEmail(res.data.Email)
                        setnic(res.data.nic)
                        setvehicle(res.data.vehicle)
                    })
                    .catch((err)=>{
                      console.log(err)
                    })
                }
                getCustomer()
            },[])
       
            
            function update(e) {
                e.preventDefault()

                const updatecustomerlist = {
                    name,
                    pnum,
                    Email,
                    nic,
                    vehicle
                }
                console.log(updatecustomerlist)
            

                axios.put('http://localhost:3001/api/Customer/update/' +id,updatecustomerlist)
                .then(()=>{
                    alert('Customer is updated successfully')
                    history.push('/Cus_details/details')
                   
                }).catch((err)=>{
                    console.log(err)
                    alert(err)
                })
            }
            

           
            return(
              <div>
              <div className="xyz3">
              <section className="logins" style={{backgroundcolor:"#eee"}}>
              <form onSubmit={(e) => {update(e)}}>
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-8">
                    <div  className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-15 order-2 order-lg-1">
                        
                            <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update user profile</h3>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Name</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={customer.name}
                                onChange={(e)=> {setname(e.target.value)}} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Phone Number</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={customer.pnum}
                                onChange={(e) => {setpnum(e.target.value)}} />
                            </div>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Email</label>
                                <input type="email" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={customer.Email}
                                onChange={(e) => {setEmail(e.target.value)}} />
                            </div>

                              <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">NIC</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                 defaultValue={customer.nic}
                                 onChange={(e) => {setnic(e.target.value)}} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Vehicle</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={customer.vehicle}
                                onChange={(e)=> {setvehicle(e.target.value)}} />
                            </div>
            
                            <div class="d-flex justify-content-end pt-3">
                              <button type="submit" class="btn btn-warning btn-lg ms-2">Update</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </form>
            </section>
            </div>
            </div>
            

            );
 
};




export default Updatecustomer;