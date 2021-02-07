import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreateSession extends Component {
    constructor(props){
        super(props);

        //BINDING this TO CLASS. V IMPORTANT!!!
        this.onChangeCampaign = this.onChangeCampaign.bind(this);
        this.onChangeCharacter = this.onChangeCharacter.bind(this);
        this.onChangeSeslog = this.onChangeSeslog.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            campaign: "",
            character: "",
            sesLog: "",
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test'],
            username: "test username"
        })
    }

    //UPDATING PROPS
    onChangeCampaign(e) {
        this.setState(
            {
                campaign: e.target.value
            }
        );
    }

    onChangeCharacter(e) {
        this.setState(
            {
                character: e.target.value
            }
        );
    }

    onChangeSeslog(e) {
        this.setState(
            {
                sesLog: e.target.value
            }
        );
    }

    onChangeDate(date) { //date cast in from calendar
        this.setState(
            {
                date: date
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();
        const session = {
            campaign: this.state.campaign,
            character: this.state.character,
            sesLog: this.state.sesLog,
            date: this.state.date
        }

        console.log(session + " submitted");

        window.location = "/"; //takes back to homepage (sessionlist)
    }

    render() {
        return (
            <div>
            <h3>Create New RPG Session</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Campaign: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.campaign}
                    onChange={this.onChangeCampaign}>
                    {
                      this.state.users.map(function(campaign) {
                        return <option 
                          key={campaign}
                          value={campaign}>{campaign}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Character: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.character}
                    onChange={this.onChangeCharacter}
                    />
              </div>
              <div className="form-group">
                <label>Session Log</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.sesLog}
                    onChange={this.onChangeSeslog}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Session Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}
