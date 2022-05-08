import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import { useParams, Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();

  const [name, getname] = useState();
  const [pnum, getpnum] = useState();
  const [Email, getEmail] = useState();
  const [nic, getnic] = useState();
  const [vehicle, getvehicle] = useState();

  // //image change
  // onFileChange = event => {
  //   this.setState({ selectedFile: event.target.files[0] });     
  // }; 
  
//   //image upload
//   onFileUpload = () => {
//     if(this.state.selectedFile!=null){
//       const file = new FormData();
  
//       file.append(
//       "file",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//       );
  
//       // Details of the uploaded file
//       console.log(this.state.selectedFile);
  
//       axios.post("http://localhost:3001/SpareParts/upload", file)
//       .then(req=>{
//               this.setState({url:req.data});
//       })
//     }else{
//         alert('Upload Images !')
//     }
// };

  useEffect(() => {
    function getEmpProfile() {
      axios
        .get("http://localhost:3001/api/Customer/tempone/" + id)
        .then((res) => {
          getname(res.data.name);
          getpnum(res.data.pnum);
          getEmail(res.data.Email);
          getnic(res.data.nic);
          getvehicle(res.data.vehicle);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEmpProfile();
  }, []);

  return (
    <div className="xyz3">
        <section className="logins" style={{backgroundcolor:"#eee"}}>
        <div className="container h-100 ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-8">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-15 col-xl-15 order-2 order-lg-1">
    
      {/* <h1 className="text-left h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Customer Profile</h1> */}
      <Link to="/">
        <Button className="logout">Logout</Button>
      </Link>
      <div className=" mx-md-4 m-4">
        <div
          style={{
              position: "relative",
            width: "100%",
            textAlign: "left",
            display: "block",
            float: "left",
            paddingTop: "250px",
          }}
        >
            
          <div>
            <label className="form-label">
              <b>Customer Name</b>
            </label>
            <input
              className="form-control"
              type="text"
              disabled
              value={name}
              
            />
            <br></br>
          </div>
          <div>
            <label className="form-label">
              <b>Customer PhoneNo</b>
            </label>
            <input
              className="form-control"
              type="text"
              value={pnum}
              disabled
            />
            <br></br>
          </div>
          <div >
            <label className="form-label">
              <b>Customer Email</b>
            </label>
            <input
              className="form-control"
              type="text"
              value={Email}
              disabled
            />
            <br></br>
          </div>
          <div >
            <label className="form-label">
              <b>Customer NIC</b>
            </label>
            <input
              className="form-control"
              type="text"
              value={nic}
              disabled
            />
            <br></br>
          </div>
          <div>
            <label className="form-label">
              <b>Customer Vehicle</b>
            </label>
            <input
              className="form-control"
              type="text"
              value={vehicle}
              disabled
            />
            <br></br>
          </div>

          
        </div>
        <div className="profilePicContainer">
          <img className="profilePic" />
          {/* <input type="file" onChange={this.onFileChange}/> */}
          <Button className="btnChanges" >Change profile picture</Button>
          
        </div>
      </div></div></div></div></div></div></div>
      </div></section>
    </div>
  );
};

export default Profile;
