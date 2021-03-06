import React, { Component } from 'react'
import axios from 'axios'
import ToastAlert from './ToastAlert'

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

    componentDidMount() {   
    // //GET CAMPAIGN
    axios.get('http://localhost:5000/campaigns') 
        .then(response => {
            if(response.data.length > 0) {
                this.setState({campaignList: response.data.map(campaignItem => campaignItem.cName)})
            }
        })
    }

    onChangeCampaign(e) {
        this.setState(
            {
                cName: e.target.value
            }
        );
    }

    //SUBMITTING CAMPAIGN
    onSubmit(e) {
        e.preventDefault();

        const cName = {
            cName: this.state.cName,
        }

        let campList = this.state.campaignList.filter(function(name) {
            return name === cName.cName;
        })


        //Input Validation
        if(campList.length === 0){
            axios.post('http://localhost:5000/campaigns/add', cName)
            .then(res => ToastAlert())
            .catch(err => {
                console.log(err)
            })
            window.location = "/createSes" //Go to create Session page))      
        } else {
            ToastAlert("Wow so easy!"); //RUN TOAST LOG
        }
        
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
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
        </div>
    )
  }
}