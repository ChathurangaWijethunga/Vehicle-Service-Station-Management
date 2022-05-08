import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import generatePDFSpareParts from './report/repotejenarater';

class SparePartAllPage extends React.Component{

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
            SP:[],
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
        axios.get('http://localhost:3001/SpareParts/all')
        .then(res => {
            this.setState({SP: res.data});
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
            sName : this.state.sName,
            sMakes: this.state.sMakes,
            sModel : this.state.sModel,
            sBrands : this.state.sBrands,
            sPrice : this.state.sPrice,
      }

        axios.put(`http://localhost:3001/SpareParts/update/${id}`, SP)
        .then(()=>{
            alert('DATA ADDED SUCCESSFULLY!');
            window.location.reload();
        }).catch((err)=>{
            alert(err.message);
        })
    }

    deleteService(id, e){  
        if(window.confirm('Are You Sure Delete Service ??')){
            axios.delete(`http://localhost:3001/SpareParts/delete/${id}`)  
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
                
                    <h1><b> <center><p class="fs-1"><p class="fst-italic">Spare Parts</p></p></center></b></h1>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:1100}} type="button" class="btn btn-outline-primary" type="submit" onClick={()=> this.nextPath('/SpareParts/add')}><b>ADD SPAREPARTS</b></button> 
                    <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:10}} type="button" class="btn btn-outline-primary" type="submit" onClick={()=> {generatePDFSpareParts(this.state.SP)}}><b>DOWNLOAD PDF</b></button>
                    </div>
                    {this.state.SP.map((sp)=>{
                        return(
                          
                            <div class="container">
                                <div class="row" style={{border:'double', marginBottom:20, paddingTop:10}}>
                                    <div class="col order-last">

                                    <div  style={{backgroundColor:'lightgrey', marginBottom:30}}>
                                        <br/>
                                        <form onSubmit={(e) => this.AddSP(sp._id, e)}>
                                    
                                        <div>
                                            <label style={{marginLeft:15}}>Name:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput"  type="text" style={{width:300, marginLeft:55}} onChange={this.setName} placeholder={sp.sName} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Makes:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput"  type="text" style={{width:300, marginLeft:55}} onChange={this.setMakes} placeholder={sp.sMakes} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Model:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput"  type="text" style={{width:300, marginLeft:55}} onChange={this.setModel} placeholder={sp.sModel} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Brand:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput"  type="text" style={{width:300, marginLeft:55}} onChange={this.setBrands} placeholder={sp.sBrands} required/>
                                        </div>
                                        <div>
                                            <label style={{marginLeft:15}}>Price:- </label> 
                                            <input  class="form-control" id="formGroupExampleInput"  type="text" style={{width:300, marginLeft:55}} onChange={this.setPrice} placeholder={sp.sPrice} required/>
                                        </div>

                                        <div>
                                            <button class="btn btn-outline-secondary" style={{marginTop:10, marginLeft:140, marginBottom:10, color:'black'}} type="submit" >Update Details</button>
                                        </div>

                                    </form>    
                                        
                                    </div>    
                                    </div>
                                    <div class="col">
                                    <div class="form-control" id="formGroupExampleInput">
                                    <div style ={{height:380}}  id="formGroupExampleInput"><br/><br/>
                                        <label style={{marginLeft:20, fontSize:25, marginBottom:10}}>Name:- </label><label style={{marginLeft:10, fontSize:25}} >{sp.sName}</label> <br />
                                        <label style={{marginLeft:20, fontSize:25, marginBottom:10}}>Makes:- </label> <label  style={{marginLeft:10, fontSize:25}}>{sp.sMakes}</label> <br />
                                        <label style={{marginLeft:20, fontSize:25, marginBottom:10}}>Model:- </label> <label  style={{marginLeft:10, fontSize:25}}>{sp.sModel}</label> <br />
                                        <label style={{marginLeft:20, fontSize:25, marginBottom:10}}> Brands:- </label> <label  style={{marginLeft:10, fontSize:25}} >{sp.sBrands}</label> <br />
                                        <label style={{marginLeft:20, fontSize:25, marginBottom:20}}>Price:- </label> <label  style={{marginLeft:10, fontSize:25}}>{sp.sPrice}</label> <br /> <br/>

                                        <button class="btn btn-outline-secondary" style={{marginLeft:150, color:'black'}} type="submit" onClick={(e) => this.deleteService(sp._id, e)}> Delete Details</button>
                                    </div>
                                    </div>
                                    </div>
                                    <br/>
                                    <div  class="col order-first">
                                        <br/>
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

export default SparePartAllPage;