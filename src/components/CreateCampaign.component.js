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
            cName: "",
            campaignList: []
        }
    }

    // componentDidMount() {   
    // //GET CAMPAIGN
        
    // }

    onChangeCampaign(e) {
        this.setState(
            {
                cName: e.target.value
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get('http://localhost:5000/campaigns')
        .then(response => {
            if(response.data.length > 0) {
                this.setState({
                campaignList: response.data.map(campaignItem => campaignItem.cName),
                //campaign: response.data[0].cName //displays campaign name of first in db
            })
            }
        }, console.log("ERROR RETRIEVING CAMPLIST"))
        
        console.log(this.state.campaignList);
        const cName = this.state.cName;
        this.state.campaignList.filter(function(name) {
            return name !== cName;
        })

        console.log(this.state.campaignList);


        //Input Validation
        if(this.state.campaignList === null){
            axios.post('http://localhost:5000/campaigns/add', cName)
            .then(res => console.log("Status" + res.data)) //promise that acknowledges submission 
        } else {
            console.log("exists");
        }
    }

            
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