import React, { Component } from 'react';

import axios from 'axios';




class shedules extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setSupplierName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setshedulesName = this.setshedulesName.bind(this);
        this.setshedulesService = this.setshedulesService.bind(this);
        this.setshedulesVehicle = this.setshedulesVehicle.bind(this);
        this.setshedulesDate = this.setshedulesDate.bind(this);
        this.setshedulesTime = this.setshedulesTime.bind(this);
        this.saveshedulesData = this.saveshedulesData.bind(this);

        this.state = {

            name: '',
            service: '',
            vehicle: '',
            date: '',
            time:'',
        }
    }

    //user defined method, takes event input
    setshedulesName(e){
        this.setState({name:e.target.value});
    }

    setshedulesService(e) {

      let pricevalue = e.target.value;
      if(pricevalue == "21000"){
      this.setState({service: "Full Service"});
      }
      else if (pricevalue == "15000"){
        this.setState({service: "Normal Service"});
      }
      else if  (pricevalue == "1000"){
        this.setState({service: "Body Wash"});
      }
  }

  setshedulesPrice(e) {
    this.setState({price: e.target.value});
}

  setshedulesVehicle(e) {
    this.setState({vehicle: e.target.value});
}

setshedulesDate(e) {
        this.setState({date: e.target.value});
    }

    setshedulesTime(e) {
      this.setState({time: e.target.value});
  }

  saveshedulesData(e) {
    e.preventDefault();
        console.log('Shedules Data', this.state);

       
        const shedules = {
            name: this.state.name, 
            service: this.state.service,
            vehicle: this.state.vehicle,
            date: this.state.date,
            time: this.state.time,
            price: this.state.price, 
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
      if(!this.state.name) {
          document.getElementById("id1").className = "form-control is-invalid";
          document.getElementById("fr").innerHTML = "Name cannot be empty";
          document.getElementById("fr").className = "invalid-feedback";
      }


      else if(!this.state.service) {
        document.getElementById("id2").className = "form-control is-invalid";
        document.getElementById("em").innerHTML = " Enter valid service/maintenance";
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
    
    else if(!this.state.vehicle) {
          document.getElementById("id3").className = "form-control is-invalid";
          document.getElementById("pn").innerHTML = " Vehicle number cannot be empty";
          document.getElementById("pn").className = "invalid-feedback";
      }
      

    else if(!this.state.date) {
      document.getElementById("id4").className = "form-control is-invalid";
      document.getElementById("cn").innerHTML = "date field cannot be empty";
      document.getElementById("cn").className = "invalid-feedback";
    }

    else if(!this.state.time) {
      document.getElementById("id5").className = "form-control is-invalid";
      document.getElementById("cn").innerHTML = "Time cannot be empty";
      document.getElementById("cn").className = "invalid-feedback";
    }

  

  else{
        axios.post('http://localhost:3001/api/Customer/AddShedule', shedules)
        .then(()=> {
            alert('Data Successfuly Inserted ');
            window.location = '/';
        }).catch((err) => {
            alert(err.message);
            console.log(err);
        });
    
      }
        
    }

    

    render(){
        return(
            <div className="xyz3">
              <br/> <br/> <br/>
            <section className="logins" style={{backgroundcolor:"#eee"}}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-8">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-15 order-2 order-lg-1">
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Shedule Service or maintenance</p>
          
                          <form className="mx-1 mx-md-4" onSubmit={(e) => {
                            this.saveshedulesData(e);
                          }}>

                            
                          <div>
                            <label className="form-label" for="form3Example3c" >Name</label>
                            <input type="text" placeholder='Enter your name'
                            maxlength ="8" minlength="4"
                             id="id1" className="form-control"
                            value={this.state.name}
                            onChange={this.setshedulesName} 
                            required />
                            <div id="fr"></div>
                        </div> <br/>

                        <div>
                            <label className="form-label" for="form3Example3c">Service</label>
                            <select id="id2"  onChange={(e) => {
                              this.setshedulesService(e);
                              this.setshedulesPrice(e);
                            }}>
                            <option>Select Service</option>
                            <option value="21000">Full_Service(Rs.21000.00)</option>
                            <option value="15000">Normal_Service(Rs.15000.00)</option>
                            <option value="1000">Body Wash(Rs.1000.00)</option>
                            </select>
                            {/* <input type="text" placeholder='Service or Maintenance' 
                            id="id2" className="form-control" 
                            value={this.state.service}
                            onChange={this.setshedulesService} required/> */}
                            <div id="em"></div>
                            </div>  <br/>
                   

                            <div>
                            <label className="form-label" for="form3Example3c">Vehicle number</label>
                            <input type="text" placeholder='Enter your vehicle number'
                             id="id3" className="form-control" 
                            value={this.state.vehicle}
                            onChange={this.setshedulesVehicle} required/>
                            <div id="ps"></div>
                        </div>  <br/> 


                        <div>
                            <label className="form-label" for="form3Example3c">Date</label>
                            <input type="date" 
                            id="id4" className="form-control" 
                            value={this.state.date}
                            onChange={this.setshedulesDate}  required/>
                            <div id="pn"></div>
                        </div> <br/>  

                        <div>
                            <label className="form-label" for="form3Example3c">Time</label>
                            <input type="time"
                             id="id5" className="form-control" 
                            value={this.state.time}
                            onChange={this.setshedulesTime} required/>
                            <div id="ps"></div>
                        </div>  <br/>  
                            <br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn btn-secondary btn-lg col-md-10 col-lg-15 col-xl-15" >Save</button>
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

export default shedules;