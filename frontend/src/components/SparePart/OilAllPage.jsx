import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class OilAllPage extends React.Component{

    nextPath(path){
        this.props.history.push(path)
    }

    constructor(props){
        super(props);

        this.setName = this.setName.bind(this);
        this.setMakes = this.setMakes.bind(this);
        this.setModel = this.setModel.bind(this);
        this.setBrands = this.setBrands.bind(this);
        this.setPrice = this.setPrice.bind(this);

        this.AddSP = this.AddSP.bind(this);

        this.state = {
            Oil:[],
            sName:'',
            sMakes:'',
            sModel:'',
            sBrands:'',
            sPrice:'',
            photo:'',
            url: '',
            selectedFile: null
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3001/SpareParts/all/oil')
        .then(res => {
            this.setState({Oil: res.data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    setName(e){
        this.setState({sName:e.target.value});
    }

    setMakes(e){
        this.setState({sMakes:e.target.value});
    }

    setModel(e){
        this.setState({sModel:e.target.value});
    }

    setBrands(e){
        this.setState({sBrands:e.target.value});
    }

    setPrice(e){
        this.setState({sPrice:e.target.value});
    }

    AddSP(id, e){

        const SP = {
            type : this.state.sName,
            oBrand: this.state.sMakes,
            oVolumetricCapacity : this.state.sModel,
            oSKU : this.state.sBrands,
            oPrice : this.state.sPrice,
      }

        axios.put(`http://localhost:3001/SpareParts/update/oil/${id}`, SP)
        .then(()=>{
            alert('Data Added !');
            window.location.reload();
        }).catch((err)=>{
            alert(err.message);
        })
    }

    deleteService(id, e){  
        if(window.confirm('Are You Sure Delete Service ??')){
            axios.delete(`http://localhost:3001/SpareParts/delete/oil/${id}`)  
            .then(res => {  
                console.log(res);  
                console.log(res.data);
                window.location.reload();
            
                const Service = this.state.Service.filter(item => item.id !== id);  
                this.setState({ Service });  
            })
        }
    }

    render(){
        return(
            <div>
                <div>

                    <h1><center><b>Oil</b></center></h1>
                    <button style ={{margin:18,padding:5, width:150, marginBottom:40,marginLeft:1200}}  type="submit" class="btn btn-outline-primary"  onClick={()=> this.nextPath('/SpareParts/Oil/add')}> <b>ADD OIL</b> </button>

                    {this.state.Oil.map((sp)=>{
                        return(
                            
                            <div class="container">
                                <div class="row"  style={{border:'double', marginBottom:20, paddingTop:10}}>
                                    <div class="col order-last">

                                    <div style={{backgroundColor:'lightgrey', marginBottom:30}}>
                                        <br/>
                                        <form onSubmit={(e) => this.AddSP(sp._id, e)}>
                                        <br/>
                                        <div>
                                            <label style={{marginLeft:15}}>Type:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput" style={{width:300, marginLeft:55}} type="text" onChange={this.setName} placeholder={sp.type} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Brand:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput" style={{width:300, marginLeft:55}} type="text"  onChange={this.setMakes} placeholder={sp.oBrand} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Volumetric Capacity:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput" style={{width:300, marginLeft:55}} type="text"  onChange={this.setModel} placeholder={sp.oVolumetricCapacity} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>SKU:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput" style={{width:300, marginLeft:55}} type="text" onChange={this.setBrands} placeholder={sp.oSKU} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Price:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput" style={{width:300, marginLeft:55}} type="text" onChange={this.setPrice} placeholder={sp.oPrice} required/>
                                        </div>

                                        <div>
                                            <button class="btn btn-outline-secondary" style={{marginTop:10, marginLeft:140, marginBottom:10, color:'black'}} type="submit" >Update Details</button>
                                        </div>
                                        
                                        

                                    </form>   
                                    </div> 
                                        
                                        
                                    </div>
                                    <div class="col">
                                    <div  style ={{height:420, width:430}} class="form-control" id="formGroupExampleInput">
                                        <label style={{marginLeft:10, fontSize:20, marginBottom:20, marginTop:40}}>Type:- </label> <label style={{marginLeft:10, fontSize:20}}>{sp.type}</label> <br />
                                        <label style={{marginLeft:10, fontSize:20, marginBottom:20}}>Brand:- </label> <label style={{marginLeft:10, fontSize:20}}>{sp.oBrand}</label> <br />
                                        <label style={{marginLeft:10, fontSize:20, marginBottom:20}}>Volumetric Capacity:- </label> <label style={{marginLeft:10, fontSize:20}}>{sp.oVolumetricCapacity}</label> <br />
                                        <label style={{marginLeft:10, fontSize:20, marginBottom:20}}>SKU:- </label> <label style={{marginLeft:10, fontSize:20}}>{sp.oSKU}</label> <br />
                                        <label style={{marginLeft:10, fontSize:20, marginBottom:50}}> Price:- </label> <label style={{marginLeft:10, fontSize:20}}>{sp.oPrice}</label> <br />

                                        <button class="btn btn-outline-secondary" style={{marginLeft:150, color:'black'}} type="submit" onClick={(e) => this.deleteService(sp._id, e)}> Delete Details</button>
                                    </div>
                                    </div>
                                    <div class="col order-first">
                                    
                                        <img src={sp.photo} alt="" style={{width:400, height:350, marginLeft:15}} />

                                    </div>
                                </div>
                                </div>
                        )
                    })}

                </div> 
            </div>
        )
    }
}

export default OilAllPage;