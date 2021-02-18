import React, { Component } from 'react'
import axios from 'axios'

export default class CreateCampaign extends Component {

    constructor(props){
        super(props);

        //BINDING this TO CLASS. V IMPORTANT!!!
        this.onChangeCampaign = this.onChangeCampaign.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cName: ""
        }
    }

    onChangeCampaign(e) {
        this.setState(
            {
                cName: e.target.value
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();
        const cName = {
            cName: this.state.cName,
        }

        axios.post('http://localhost:5000/campaigns/add', cName)
            .then(res => console.log(res.data), //promise that acknowledges submission
            console.log("ERROR: " + JSON.stringify(cName) + " exists")); //failstate, if campaign already exists.

        this.setState({
            cName: "" //resets User
        })
    }

    render() {
        return (
            <div className="activeWindow">
                <h3>Create New Campaign</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Campaign Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.cName}
                            onChange={this.onChangeCampaign}
                            />
                    </div>
                    <div class="alert alert-warning" role="alert">
                        A simple warning alert—check it out!
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
        </div>
    )
  }
}