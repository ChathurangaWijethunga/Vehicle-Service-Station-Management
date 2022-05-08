import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class message extends React.Component{

    constructor(props) {
        super(props);

        this.setId = this.setId.bind(this);
        this.setMsg = this.setMsg.bind(this);
        this.send = this.send.bind(this);

        this.state = {
            id:'',
            message:''
        }
    }

    setId(e){
        this.setState({id:e.target.value});
    }

    setMsg(e){
        this.setState({message:e.target.value});
    }

    send(e){
        const SP = {
            id: this.state.id,
            message: this.state.message,
        }

        axios.post('http://localhost:3001/SpareParts/message', SP)
        .then(()=>{
            alert('Data Added !');
        }).catch((err)=>{
            alert(err.message);
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.send}>
                    <div className="d-grid gap-2 col-6 mx-auto" style={{backgroundColor:'lightgrey',margin:20,padding:50}}>
                    <div>
                        <label><b>Suppler ID :-</b></label>
                        <input class="form-control" id="formGroupExampleInput"  type="text" value={this.state.id} onChange={this.setId} required/>
                    </div>

                    <div>
                        <label ><b>Message :-</b></label>
                        <input class="form-control" id="formGroupExampleInput"  type="text" value={this.state.message} onChange={this.setMsg} required/>
                    </div>

                    <div>
                        <button style={{marginLeft:280,backgroundColor:"blue"}} type="submit">Sent Message</button>
                    </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default message;