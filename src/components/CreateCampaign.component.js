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

        console.log(cName + " submitted");

        axios.post('http://localhost:5000/campaigns/add', cName)
            .then(res => console.log(res.data)); //promise that acknowledges submission

        this.setState({
            cName: "" //resets User
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
                    value={this.state.cName}
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