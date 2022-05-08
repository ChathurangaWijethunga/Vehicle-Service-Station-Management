import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class OilAdd extends React.Component{

    constructor(props){
        super(props);

        this.setName = this.setName.bind(this);
        this.setMakes = this.setMakes.bind(this);
        this.setModel = this.setModel.bind(this);
        this.setBrands = this.setBrands.bind(this);
        this.setPrice = this.setPrice.bind(this);

        this.AddSP = this.AddSP.bind(this);

        this.state = {
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

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });     
      };

      onFileUpload = () => {
          if(this.state.selectedFile!=null){
            const file = new FormData();
        
            file.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
            );
        
            // Details of the uploaded file
            console.log(this.state.selectedFile);
        
            axios.post("http://localhost:3001/SpareParts/upload", file)
            .then(req=>{
                    this.setState({url:req.data});
            })
        }else{
            alert('Upload Image !')
        }
      };

    setName(e){
        var nameonly = /^[a-zA-Z]*$/g;
        if ((e.target.value.match(nameonly))) {
        this.setState({sName:e.target.value});
        }
        else{
            alert('Enter Letters Only !');
        }
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
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({sPrice:e.target.value});
        }else{
            alert('Enter Number Only !');
        }
    }

    AddSP(e){

        const SP = {
            type : this.state.sName,
            oBrand: this.state.sMakes,
            oVolumetricCapacity : this.state.sModel,
            oSKU : this.state.sBrands,
            oPrice : this.state.sPrice,
            photo : this.state.url
      }
      if(SP.type!='' && SP.oBrand!='' && SP.oVolumetricCapacity!='' && SP.oSKU!='' && SP.oPrice!='' && SP.photo!=''){

        axios.post('http://localhost:3001/SpareParts/add/oil', SP)
        .then(()=>{
            alert('Data Added !');
        }).catch((err)=>{
            alert(err.message);
        })
    }else{
        alert('Fill All Details !')
    }
    }

   render(){
       return(
           <div>
               <h1><center><b>Add Oils</b></center></h1>

               
            <div className="d-grid gap-2 col-6 mx-auto" style={{backgroundColor:'lightgrey',margin:20,padding:50}}>
               <div>
                   <label>Type :-</label>
                   <input class="form-control" id="formGroupExampleInput" type="text" onChange={this.setName} value={this.state.sName}/>
               </div>
               <div>
                   <label>Brand :-</label>
                   <input class="form-control" id="formGroupExampleInput" type="text" onChange={this.setMakes} value={this.state.sMakes}/>
               </div>
               <div>
                   <label>Volumetric Capacity :-</label>
                   <input class="form-control" id="formGroupExampleInput" type="text" onChange={this.setModel} value={this.state.sModel}/>
               </div>
               <div>
                   <label>SKU :-</label>
                   <input class="form-control" id="formGroupExampleInput" type="text" onChange={this.setBrands} value={this.state.sBrands}/>
               </div>
               <div>
                   <label>Price :-</label>
                   <input class="form-control" id="formGroupExampleInput" type="text" onChange={this.setPrice} value={this.state.sPrice}/>
               </div>

               <h4 style={{marginLeft:220}}>-- Upload Image --</h4>

               <div style={{marginLeft:130}}>
                <input type="file" onChange={this.onFileChange}/>
                <button class="btn btn-primary" style={{width:100, height:40}} onClick={this.onFileUpload}>upload</button>

                </div>

                <div>
                   <img src={this.state.url} style={{width:100, height:100, marginLeft:270}} />
               </div>

               <div style ={{marginLeft:270}}>
                   <button class="btn btn-primary btn" style={{width:100}} type="submit" onClick={this.AddSP}>Add</button>
               </div>
            </div>
           </div>
       )
   }
}

export default OilAdd;