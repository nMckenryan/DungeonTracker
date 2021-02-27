import React, { Component } from 'react'
import axios from 'axios'
import ToastAlert from './ToastAlert';

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

        //Input Validation
        axios.get('http://localhost:5000/campaigns?cName=', cName)
            .then(function() {
                this.res = this.res.filter(re => re.cName === this.state.cName);;
                if(this.res >= 0) {
                    console.log("fail");
                }
            });
            }

            // axios.post('http://localhost:5000/campaigns/add', cName)
            // .then(res => console.log("Status" + res.data) //promise that acknowledges submission

            
                // if(cName == campaign.name) {
                //     ToastAlert("CAMPAIGN ERROR", cName + " already Exists"); //failstate, if campaign already exists.
                // } else {
                //     axios.post('http://localhost:5000/campaigns/add', cName)
                //     .then(res => console.log("Status" + res.data) //promise that acknowledges submission
                // } 
                // )


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
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
        </div>
    )
  }
}