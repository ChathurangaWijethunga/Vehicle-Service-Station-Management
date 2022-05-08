
import React, { Component } from 'react';
import { withRouter } from 'react-router'

import { Link, useParams, useHistory } from "react-router-dom";


import './S_details.css';
import axios from 'axios';





const Shedule = props => {
    
        function Delete(_id){
            var result = window.confirm('Confirm to delete this shedule')
            if(result==true){
            axios.delete('http://localhost:3001/api/Customer/delete/'+_id)
        .then(()=> {
            alert('Shedule deleted successfully');
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
        <td className="csan">{props.Shedule.name}</td>
        <td className="csan">{props.Shedule.service}</td>
        <td className="csan">{props.Shedule.vehicle}</td>
        <td className="csan">{props.Shedule.date}</td>
        <td className="csan">{props.Shedule.time}</td>

        <td className="csan" >

        
        {/* {data.map((upshedule) => (
                <Link to={url+props.Shedule._id}>
         <button type="button" className="btn btn-outline-primary mb-3" style={{marginRight:"10px"}}
        >Update</button></Link>
        ))} */}

            <button type="button" className="btn btn-outline-danger" style={{marginRight:"10px"}} onClick={(e) => {
             Delete(props.Shedule._id);
          }}>Delete</button>

          
        </td>
    </tr>
);
};



class shedulelist extends React.Component{

    constructor(props){
        super(props);
        this.state = {Shedule:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/Customer/get')
            .then(res => {
                //get all info about a supplier
                this.setState({Shedule: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    SheduleList() {
        return this.state.Shedule.map(currentshedule => {
            return <Shedule Shedule = {currentshedule}/>;
        })
    }

    render(){
        return(
            <div className='xyz3'>  
            <p className="text-left h1 fw-bold text-light mb-5 mx-1 mx-md-4 mt-4">Shedule services or Maintenance details</p>
            <div className='container h-100'>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
            <table  class="chamoditable table table-hover" striped bordered hover variant="dark">
                <thead className="thead-dark">
                    <tr  className="table-light">
                    <th className="csan" scope="col">Name</th>
                    <th className="csan" scope="col">Services</th>
                    <th  className="csan"scope="col">Vehicle number</th>
                    <th  className="csan"scope="col">Date</th> 
                    <th  className="csan"scope="col">Time</th>
                    <th  className="csan"scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {this.SheduleList() }
                </tbody>
                </table><br/>
                {/*<button type="button" className="btn btn-primary" style={{backgroundColor:"#000000",marginLeft:"1120px"}}
                onClick = {()=>{
                    generetePDFSupplier(this.state.Customer);
                }}
            >Generate Report</button> */}
                <br/><br/>
                </div>
                </div> </div>
                </div> </div> <br/><br/>
                </div>
        );
        
    }  
}

export default shedulelist;