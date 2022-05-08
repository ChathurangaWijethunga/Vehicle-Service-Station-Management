
import React, { Component } from 'react';
import { withRouter } from 'react-router'

import { Link, useParams, useHistory } from "react-router-dom";


import './details.css';
import axios from 'axios';
import generetePDFCustomer from '../Report/ReportGenerator';



const Customer = props => {
    
        function Delete(_id){
            var result = window.confirm('Confirm to delete this customer')
            if(result==true){
            axios.delete('http://localhost:3001/api/Customer/tempdelete/'+_id)
        .then(()=> {
            alert('Customer deleted successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        });
    }
    }

        
        const { _id } = useParams()
        const url = '/update/'

        const data=[props]
        
        

    return(
    <tr>
        <td className="csan">{props.Customer.name}</td>
        <td className="csan">{props.Customer.pnum}</td>
        <td className="csan">{props.Customer.Email}</td>
        <td className="csan">{props.Customer.nic}</td>
        <td className="csan">{props.Customer.vehicle}</td>

        <td className="csan" >

        
        
                <Link to={"/Cus_update/C_update/" + props.Customer._id}>
         <button type="button" className="btn btn-outline-primary mb-3" style={{marginRight:"10px"}}
        >Update</button></Link>
        

            <button type="button" className="btn btn-outline-danger" style={{marginRight:"10px"}} onClick={(e) => {
             Delete(props.Customer._id);
          }}>Delete</button>


                <Link to={"/Cus_profile/profile/" + props.Customer._id}>
         <button type="button" className="btn btn-outline-success" style={{marginRight:"10px"}}
        >View</button></Link>
     

          
        </td>
    </tr>
);
};



class customerlist extends React.Component{

    constructor(props){
        super(props);
        this.state = {Customer:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/Customer/all')
            .then(res => {
                //get all info about a supplier
                this.setState({Customer: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    CustomerList() {
        return this.state.Customer.map(currentcustomer => {
            return <Customer Customer = {currentcustomer}/>;
        })
    }

    render(){

        function downloadpdf(cus){
            generetePDFCustomer(cus)
        }

        return(
            <div className='xyz3'>  
            <p className="text-left h1 fw-bold text-light mb-5 mx-1 mx-md-4 mt-4">Cusomer details</p>
            <div className='container h-100'>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
            <table  class="chamoditable table table-hover" striped bordered hover variant="dark">
                <thead className="thead-dark">
                    <tr  className="table-light">
                    <th className="csan" scope="col">Name</th>
                    <th className="csan" scope="col">Phone Number</th>
                    <th  className="csan"scope="col">Email Address</th>
                    <th  className="csan"scope="col">NIC</th> 
                    <th  className="csan"scope="col">Vehicle number</th>
                    <th  className="csan"scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {this.CustomerList() }
                </tbody>     
                </table><br/>
                <button type="button" className="btn btn-primary"
                onClick = {()=>{
                    downloadpdf(this.state.Customer);
                }}
            >Generate Report</button>
                <br/><br/>
                </div>
                </div> </div>
                </div> </div> <br/><br/>
                </div>
        );
        
    }  
}

export default customerlist;