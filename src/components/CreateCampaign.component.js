import React, { Component } from 'react'

export default class CreateCampaign extends Component {

    constructor(props){
        super(props);

        //BINDING this TO CLASS. V IMPORTANT!!!
        this.onChangeCampaign = this.onChangeCampaign.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            campaign: ""
        }
    }

    onChangeCampaign(e) {
        this.setState(
            {
                campaign: e.target.value
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();
        const campaign = {
            campaign: this.state.campaign,
        }

        console.log(campaign + " submitted");

        this.setState({
            username: "" //resets User
        })
    }

    render() {
        return (
            <div>
            <h3>Create New Campaign</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Campaign Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.campaign}
                    onChange={this.onChangeCampaign}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}