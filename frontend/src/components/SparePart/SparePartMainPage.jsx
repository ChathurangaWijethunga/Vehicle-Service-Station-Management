import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class SparePartMainPage extends React.Component{
    nextPath(path){
        this.props.history.push(path)
    }
    render(){
        return(
            <div>
                <div className="d-grid gap-2 col-6 mx-auto" style={{backgroundColor:'lightgrey',margin:20,padding:50}}>
                    <button style={{height:70, marginBottom:20,fontSize:20, fontFamily:"Serif"}} onClick={()=> this.nextPath('/SpareParts/all')} class="btn btn-outline-dark" type="button"><b>SPARE PARTS</b></button>
                    <button style={{height:70, marginBottom:20,fontSize:20, fontFamily:"Serif"}} onClick={()=> this.nextPath('/SpareParts/Oil/all')} class="btn btn-outline-dark" type="button"><b>OIL</b></button>
                    <button style={{height:70, marginBottom:20,fontSize:20, fontFamily:"Serif"}} onClick={()=> this.nextPath('/SpareParts/message')} class="btn btn-outline-dark" type="button"><b>Send Message for Suppler</b></button>
                </div> 
                <br>
                </br> 
            </div>
        )
    }
}

export default SparePartMainPage;