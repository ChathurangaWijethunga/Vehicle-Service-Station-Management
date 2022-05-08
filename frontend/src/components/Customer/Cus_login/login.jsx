
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


{/* import './login.css';
import React, { Component, useState } from 'react';
import axios from 'axios';


const Login = () => {

    const [user, setUser] = useState(
        {
            email: "",
            password: "",
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
        <div className='xyz3'>  
        <div className='login'>
        <p className="text-left h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in to your account</p>
        <p className="text-left h6  mb- mx-1 mx-md-2 mt-1">Welcome back! Please enter your details.</p>
        <h6>Email</h6>
        <input type="text" name="email" placeholder='Enter your email' value={user.name} onChange={handChange}></input>
        <h6>Password</h6>
        <input type= "password" placeholder='***********' name="password" value={user.name} onChange={handChange}></input>
        <h6>Remember for 30 days Forget Password</h6>
        <div className='button'>Sign in</div>
        <div className = "button">Sign in with Google</div>
        <h6>Don't have an account? Sign up</h6> 
    </div></div>
       
        
        
        

    )
}


export default Login */}





class Login extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setSupplierName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setCustomerEmail = this.setCustomerEmail.bind(this);
        this.setCustomerPassword = this.setCustomerPassword.bind(this);
        this.logCustomerData = this.logCustomerData.bind(this);

        this.state = {

            Email: '',
            password: '',

        }
    }

    //user defined method, takes event input

    setCustomerEmail(e) {
      this.setState({Email: e.target.value});
  }

  setCustomerPassword(e) {
      this.setState({password: e.target.value});
  }

  logCustomerData(e) {
    const Customer = {
      Email: this.state.Email,
      password: this.state.password, 
  } 

        axios.post('http://localhost:3001/api/Customer/loginme/', Customer)
        .then((res)=> {
          if(res.data == 'Login Successfull') {
            localStorage.setItem('Customer', this.state.Email);
            window.location = '/Cus_details/details';
        }
        else {
          document.getElementById("suvlog1").className = "form-control is-invalid";
          document.getElementById("suvlog2").className = "form-control is-invalid";
          document.getElementById("minlog").innerHTML = res.data;
          document.getElementById("minlog").className = "invalid-feedback";
      }
        }).catch((err) => {
            alert(err.message);
        });
        e.preventDefault();
      }

    render(){
        return(
            <div className="xyz3">
              <br/> <br/> <br/>
            <section className="login" style={{backgroundcolor:"#eee"}}>
    
                    <div className="card-body p-md-5 ">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-15 col-xl-15 order-2 order-lg-1">
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in to your account</p>
                          <p className="text-center h6  mb-5 mx-2 mx-md-5 mt-1">Welcome back! Please enter your details.</p>
                          
                          <form className=" mb-3 mx-md-4 m-4" onSubmit={
                            this.logCustomerData                         
                          }>
        
                        <div>
                            <label className="form-label" style={{disply:'flex', justifyContent:'left'}}>Email</label>
                            <input type="email" placeholder='Enter your email' 
                            id="suvlog1" className="form-control" 
                            //pattern="[A-za-z0-9]@[A-Za-z]\.[a-zA-Z]{2,3}"
                            value={this.state.Email}
                            onChange={this.setCustomerEmail} required/>
                            {/* <div id="minlog"></div> */}
                            </div> <br/>

                            <div>
                            <label className="form-label">Password</label>
                            <input type="password" placeholder='Create password'
                             id="suvlog2" className="form-control" 
                            value={this.state.password}
                            onChange={this.setCustomerPassword} required/>
                            <Form.Text className="text-muted">Must be atleast 8 characters.</Form.Text>
                            <div id="minlog"></div>
                        </div>  <br/><br/>

                        <div className="form-group">
                                <input type="submit" className="btn btn-primary btn-lg col-md-10 col-lg-15 col-xl-12" value="Login" />
                            </div><br/>

                            <br/>
                            {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn btn-primary btn-lg col-md-10 col-lg-15 col-xl-15" onClick={this.saveCustomerData}><a href="/Cus_details/details" style={{color:"white"}}></a>Sign in</button>
                            </div> */}
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="btn btn-outline-info btn-lg col-md-10 col-lg-15 col-xl-15" onClick={this.saveshedulesData}><a href='https://accounts.google.com/servicelogin'>Sign in with Google</a></button>
                            </div>
                            <br/><br/>
                 
                            <Form.Text className="text-muted d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <a href="/SignUp/SignUp" className="ForgetPwd">Don't have an Account? Sign-Up Here..</a>
                                
                                </Form.Text>
          
                          </form>
          
                        </div>
                      
                      </div>
                    </div>
           
          </section> 
         
          <br/> <br/> <br/>  
            </div>


        );
    


    }   
}

export default Login;