import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



{/* import './signUp.css';
import React, { Component, useState } from 'react'; 
import axios from 'axios';
import Form from 'react-bootstrap/Form'


const SignUp = () => {

    const [user, setUser] = useState(
        {
            name: "",
            password: "",
            email: "",
            phoneNumber: "",
            vehicle:"",
            nic: ""
        }
    )

    const handChange = e => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className='login'> 
        {console.log("User", user)}
        <h1>Register as a customer </h1>
        <h6>Name</h6>
        <input type="text" name="name" value={user.name} placeholder='Enter your name' onChange={handChange}></input>
        <h6>Email</h6>
        <input type="text" name="name" value={user.name} placeholder='Enter your email' onChange={handChange}></input>
        <h6>Password</h6>
        <input type="text" name="password" value={user.password} placeholder='Create password' onChange={handChange}></input>
        <h6>Phone number</h6>
        <input type="text" name="phoneNumber" value={user.phoneNumber} placeholder='+94 000-0000' onChange={handChange}></input>
        <h6>Enter vehicle</h6>
        <input type="text" name="vehicle" value={user.vehicle} placeholder='Enter vehicle number' onChange={handChange}></input>
        <h6>NIC</h6>
        <input type="text" name="nic" value={user.nic} placeholder='Enter your NIC number' onChange={handChange}></input>

        <div className='button'>Register</div>
        </div>

    )
}


export default SignUp */}






class registercustomer extends React.Component{

  

    constructor(props) {
        super(props);

        
        /*
        *setSupplierName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setCustomerName = this.setCustomerName.bind(this);
        this.setCustomerEmail = this.setCustomerEmail.bind(this);
        this.setCustomerPassword = this.setCustomerPassword.bind(this);
        this.setCustomerPhone = this.setCustomerPhone.bind(this);
        this.setCustomervehicle = this.setCustomervehicle.bind(this);
        this.setCustomernic = this.setCustomernic.bind(this);
        this.saveCustomerData = this.saveCustomerData.bind(this);

        this.state = {

            name: '',
            Email: '',
            password: '',
            pnum: '',
            vehicle: '',
            nic:'',
        }
    }

    //user defined method, takes event input
    setCustomerName(e){
        this.setState({name:e.target.value});
    }

    setCustomerEmail(e) {
      this.setState({Email: e.target.value});
  }

  setCustomerPassword(e) {
      this.setState({password: e.target.value});
  }

  setCustomerPhone(e) {
    this.setState({pnum: e.target.value});
}

  setCustomervehicle(e) {
        this.setState({vehicle: e.target.value});
    }

    setCustomernic(e) {
      this.setState({nic: e.target.value});
  }

  saveCustomerData(e) {
        console.log('Customer Data', this.state);

       
        const Customer = {
            name: this.state.name, 
            Email: this.state.Email,
            password: this.state.password,
            pnum: this.state.pnum,
            vehicle: this.state.vehicle,
            nic: this.state.nic, 
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
      if(!this.state.name) {
          document.getElementById("id1").className = "form-control is-invalid";
          document.getElementById("fr").innerHTML = "Name cannot be empty";
          document.getElementById("fr").className = "invalid-feedback";
      }


      else if(!this.state.Email) {
        document.getElementById("id2").className = "form-control is-invalid";
        document.getElementById("em").innerHTML = " Enter valid email";
        document.getElementById("em").className = "invalid-feedback";
      }
      
      // else if(this.state.email) {
      //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      //       if(reg.test(this.state.email) ==false){
      //           this.setState({emailError:"Email Field is Invalid"});
      //           return false;
      //       }
      //       return true;
      // }
    
    
        else if(!this.state.password) {
          document.getElementById("id3").className = "form-control is-invalid";
          document.getElementById("ps").innerHTML = "Password cannot be empty";
          document.getElementById("ps").className = "invalid-feedback";
        }
        else if(this.state.password.length < 8) {
          document.getElementById("id3").className = "form-control is-invalid";
          document.getElementById("ps").innerHTML = "Password should contain at least 8 characters";
          document.getElementById("ps").className = "invalid-feedback";
          
         }

         else if(!this.state.pnum) {
          document.getElementById("id4").className = "form-control is-invalid";
          document.getElementById("pn").innerHTML = " Mobile cannot be empty";
          document.getElementById("pn").className = "invalid-feedback";
      }
      else if(this.state.pnum.length != 10){
        document.getElementById("id4").className = "form-control is-invalid";
        document.getElementById("pn").innerHTML = " Invalid phone number";
        document.getElementById("pn").className = "invalid-feedback";
      }

    else if(!this.state.vehicle) {
      document.getElementById("id5").className = "form-control is-invalid";
      document.getElementById("cn").innerHTML = "vehicle number cannot be empty";
      document.getElementById("cn").className = "invalid-feedback";
    }

    else if(!this.state.nic) {
      document.getElementById("id6").className = "form-control is-invalid";
      document.getElementById("cn").innerHTML = "NIC cannot be empty";
      document.getElementById("cn").className = "invalid-feedback";
    }

  

  else{
        axios.post('http://localhost:3001/api/Customer/registercustomer', Customer)
        .then(()=> {
            alert('Data Successfuly Inserted ');
            

        }).catch((err) => {
            alert(err.message);
        });
    
      }
        
    }

    

    render(){
        return(
            <div className="xyz3">
              <br/> <br/> <br/>
            <section className="logins" style={{backgroundcolor:"#eee"}}>
            <div className="container h-100 ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-8">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-15 col-xl-15 order-2 order-lg-1">
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register as a customer</p>
          
                          <form className=" mx-md-4 m-4">

                            
                          <div>
                            <label className="form-label" for="form3Example3c" >Name</label>
                            <input type="text" placeholder='Enter your name'
                            maxlength ="30" minlength="4"
                             id="id1" className="form-control "
                            value={this.state.name}
                            onChange={this.setCustomerName} 
                            required />
                            <div id="fr"></div>
                        </div> <br/>

                        <div>
                            <label className="form-label" for="form3Example3c">Email</label>
                            <input type="email" placeholder='Enter your email' 
                            id="id2" className="form-control" 
                            //pattern="[A-za-z0-9]@[A-Za-z]\.[a-zA-Z]{2,3}"
                            value={this.state.Email}
                            onChange={this.setCustomerEmail} required/>
                            <div id="em"></div>
                            </div> <br/>

                            <div>
                            <label className="form-label" for="form3Example3c">Password</label>
                            <input type="text" placeholder='Create password'
                             id="id3" className="form-control" 
                            value={this.state.password}
                            onChange={this.setCustomerPassword} required/>
                            <Form.Text className="text-muted">Must be atleast 8 characters.</Form.Text>
                            <div id="ps"></div>
                        </div>  <br/> 


                        <div>
                            <label className="form-label" for="form3Example3c">Phone Number</label>
                            <input type="text" placeholder='e.g 0714452251'
                            id="id4" className="form-control" 
                            value={this.state.pnum}
                            onChange={this.setCustomerPhone}  required/>
                            <div id="pn"></div>
                        </div> <br/>  

                        <div>
                            <label className="form-label" for="form3Example3c">Enter vehicle</label>
                            <input type="text" placeholder='Enter your vehicle number'
                             id="id5" className="form-control" 
                            value={this.state.vehicle}
                            onChange={this.setCustomervehicle} required/>
                            <div id="ps"></div>
                        </div>  <br/>  

                        <div>
                            <label className="form-label" for="form3Example3c">NIC</label>
                            <input type="text" placeholder='Enter your NIC number'
                             id="id6" className="form-control" 
                            value={this.state.nic}
                            onChange={this.setCustomernic} required/>
                            <div id="ps"></div>
                        </div>  <br/> 


                            <div className="form-check d-flex justify-content-center mb-2">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label className="form-check-label" id="Agree" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveCustomerData}>Register</button>
                            </div>
          
                          </form>
          
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
            
          <br/> <br/> <br/>  
            </div>


        );
    


    }   
}

export default registercustomer;