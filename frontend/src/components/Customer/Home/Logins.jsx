import "./Logins.css";
import React, { Component } from "react";

import axios from "axios";

class Logins extends React.Component {
  constructor(props) {
    super(props);

    this.setCustomerPassword = this.setCustomerPassword.bind(this);
    this.setCustomerMobile = this.setCustomerMobile.bind(this);
    this.loginCustomer = this.loginCustomer.bind(this);

    this.setSupplierEmail = this.setSupplierEmail.bind(this);
    this.setSupplierPassword = this.setSupplierPassword.bind(this);
    this.loginSupplier = this.loginSupplier.bind(this);

    this.setWorkingPersonelUN = this.setWorkingPersonelUN.bind(this);
    this.setWorkingPersonelPW = this.setWorkingPersonelPW.bind(this);
    this.loginWorkingPersonel = this.loginWorkingPersonel.bind(this);

    this.state = {
      cusMobile: "",
      cusPw: "",

      supEmail: "",
      supPw: "",

      wokerUN: "",
      workerPW: "",
    };
  }

  setCustomerMobile(e) {
    this.setState({ cusMobile: e.target.value });
  }

  setCustomerPassword(e) {
    this.setState({ cusPw: e.target.value });
  }

  setSupplierEmail(e) {
    this.setState({ supEmail: e.target.value });
  }

  setSupplierPassword(e) {
    this.setState({ supPw: e.target.value });
  }

  setWorkingPersonelUN(e) {
    this.setState({ wokerUN: e.target.value });
  }

  setWorkingPersonelPW(e) {
    this.setState({ workerPW: e.target.value });
  }

  loginCustomer(e) {
    const logCustomer = {
      logMobile: this.state.cusMobile,
      logpw: this.state.cusPw,
    };

    axios
      .post("http://localhost:3001/api/Customer/loginme", logCustomer)
      .then((res) => {
        if (res.data == "Login Successfull") {
          localStorage.setItem("customer", this.state.cusMobile);
          window.location = "/CusMenu";
        } else {
          document.getElementById("suvlog1").className =
            "form-control is-invalid";
          document.getElementById("suvlog2").className =
            "form-control is-invalid";
          document.getElementById("minlog").innerHTML = res.data;
          document.getElementById("minlog").className = "invalid-feedback";
        }
      })
      .catch((err) => {
        alert(err.message);
      });
    e.preventDefault();
  }

  loginSupplier(e) {
    const logSupplier = {
      logEmail: this.state.supEmail,
      logpw: this.state.supPw,
    };

    axios
      .post("http://localhost:3001/acceptsupplier/loginme", logSupplier)
      .then((res) => {
        if (res.data == "Login Successfull") {
          window.location = "/item";
        } else {
          document.getElementById("chmdilog1").className =
            "form-control is-invalid";
          document.getElementById("chmdilog2").className =
            "form-control is-invalid";
          document.getElementById("snklpnilog").innerHTML = res.data;
          document.getElementById("snklpnilog").className = "invalid-feedback";
        }
      })
      .catch((err) => {
        alert(err.message);
      });
    e.preventDefault();
  }

  loginWorkingPersonel(e) {
    let logStaff = {
      logUserName: this.state.wokerUN,
      logpw: this.state.workerPW,
    };

    if (logStaff.logUserName.substring(0, 3).toLocaleUpperCase() == "EMP") {
      logStaff.logUserName = logStaff.logUserName.toLocaleUpperCase();

      axios
        .post("http://localhost:3001/api/Employee/loginEmployee", logStaff)
        .then((res) => {
          if (res.data == "Login Successfull") {
            window.location = "/empProfile/" + logStaff.logUserName;
          } else {
            document.getElementById("otherslogin1").className =
              "form-control is-invalid";
            document.getElementById("otherslogin2").className =
              "form-control is-invalid";
            document.getElementById("otherslogin3").innerHTML =
              "Invalid Username or Password";
            document.getElementById("otherslogin3").className =
              "invalid-feedback";
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      axios
        .post("http://localhost:3001/api/Employee/loginManager", logStaff)
        .then((res) => {
          if (res.data == "FINANCE") {
            window.location = "/payment";
          } else if (res.data == "HR") {
            window.location = "/tabView";
          } else if (res.data == "SPARE-PART") {
            window.location = "/SpareParts";
          } else if (res.data == "UTILITY") {
            window.location = "/Equipment";
          } else if (res.data == "MAINTENANCE") {
            window.location = "MManagement";
          } else if (res.data == "SERVICES") {
            window.location = "Services";
          } else {
            document.getElementById("otherslogin1").className =
              "form-control is-invalid";
            document.getElementById("otherslogin2").className =
              "form-control is-invalid";
            document.getElementById("otherslogin3").innerHTML =
              "Invalid Username or Password";
            document.getElementById("otherslogin3").className =
              "invalid-feedback";
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-2">
              <h3>Customer Login Form</h3>
              <form onSubmit={this.loginCustomer}>
                {/* <div class="input-group form-group">
                            <span class="input-group-text" id="basic-addon1">+94</span>
                                <input type="number" 
                                    className="form-control"
                                    placeholder="712345678 *" 
                                    id="suvlog1"
                                    value={this.state.cusMobile} 
                                    onChange={this.setCustomerMobile}
                                    aria-label="712345678 *" 
                                    aria-describedby="basic-addon1"/>
                            </div><br/>

                            <div className="form-group">
                                <input type="password" 
                                    className="form-control" 
                                    placeholder="Your Password *" 
                                    id="suvlog2"
                                    value={this.state.cusPw} 
                                    onChange={this.setCustomerPassword}/>
                                <div id="minlog"></div>
                            </div><br/> */}
                <div className="form-group">
                  <a
                    className="btn btn-primary btn-lg col-md-10 col-lg-15 col-xl-12"
                    href="/Cus_login/Login"
                  >
                    Login
                  </a>
                  {/* <input type="submit" className="btnSubmit" value="Login" /> */}
                </div>
                <br />
                <div className="form-group">
                  <a href="/SignUp/SignUp" className="ForgetPwd">
                    Don't have an Account? Sign-Up Here..
                  </a>
                </div>
              </form>
            </div>
            <div className="col-md-6 login-form-1">
              <img
                src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg"
                width="400px"
              />
            </div>
          </div>
        </div>

        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <img
                src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg"
                width="400px"
              />
            </div>
            <div className="col-md-6 login-form-2">
              <h3>Supplier Login Form</h3>
              <form onSubmit={this.loginSupplier}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                    id="chmdilog1"
                    value={this.state.supEmail}
                    onChange={this.setSupplierEmail}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    id="chmdilog2"
                    value={this.state.supPw}
                    onChange={this.setSupplierPassword}
                  />
                  <div id="snklpnilog"></div>
                </div>
                <br />

                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <br />
                <div className="form-group">
                  <a href="/registersupplier" className="ForgetPwd">
                    Don't have an Account? Sign-Up Here..
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-2">
              <h3>Staff Login Form</h3>
              <form onSubmit={this.loginWorkingPersonel}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Firstname *"
                    id="otherslogin1"
                    value={this.state.wokerUN}
                    onChange={this.setWorkingPersonelUN}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="otherslogin2"
                    placeholder="Your Password *"
                    value={this.state.workerPW}
                    onChange={this.setWorkingPersonelPW}
                  />
                  <div id="otherslogin3"></div>
                </div>
                <br />
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <br />
              </form>
            </div>
            <div className="col-md-6 login-form-1">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                width="400px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Logins;
