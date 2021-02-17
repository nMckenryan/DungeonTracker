import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

//TODO: Combine with CreateSession? - Update Session

export default class CompileSession extends Component {
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
            campaignList: [],
            isEdit: false
        }
    }

    componentDidMount() { //get and display campaign list

      //TODO: CHECK IF character VARIABLE SET. 

      //SET SESSION
      axios.get('http://localhost:5000/sessions/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          campaign: response.data.campaign,
          character: response.data.character,
          sesLog: response.data.sesLog,
          date: new Date(response.data.date)
        })   
        console.log(this.state.character);
      })
      .catch(function (error) {
        console.log(error);
      })

      //SET CAMPAIGN
      axios.get('http://localhost:5000/campaigns')
      .then(response => {
          if(response.data.length > 0) {
              this.setState({
              campaignList: response.data.map(campaignItem => campaignItem.cName),
          })
          }
      })

      //CHECK FOR STATE. 
      console.log(this.state.character + this.state.sesLog);

      //SETS TO 'Edit Session' if variables found.
      if(this.state.character === undefined && this.state.sesLog) {
        this.setState({isEdit: true});
      }
    }

    //SET METHODS / UPDATING PROPS
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

        if(this.props.location.pathname.substring(0,5) === "/edit") { //reads path to check if editing or creating.
          axios.post('http://localhost:5000/sessions/update/'+this.props.match.params.id, session)
              .then(res => console.log(res.data)); //promise that acknowledges submission
            window.location = "/"; //takes back to homepage (sessionlist)
        } else {
          axios.post('http://localhost:5000/sessions/add', session)	
              .then(res => console.log(res.data)); //promise that acknowledges submission	
        }

        
    }

    render() {
        return (
            <div className="window">
            <h3>Edit RPG Session</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Campaign: </label>
                <select 
                    required
                    className="form-control"
                    value={this.state.campaign}
                    onChange={this.onChangeCampaign}>
                    {
                      this.state.campaignList.map(function(campaign) {
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
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}
