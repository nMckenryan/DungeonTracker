import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//SESSION FUNC COMPONENT FOR DISPLAYING INDIVIDUAL FIELDS
const Session = props => (
    <tr>
      <td>{props.session.campaign}</td>
      <td>{props.session.character}</td>
      <td>{props.session.sesLog}</td>
      <td>{props.session.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.session._id}>edit</Link> | <button href="#" onClick={() => { props.deleteSession(props.session._id) }}>delete</button>
      </td>
    </tr>
  )

export default class SessionList extends Component {

    constructor(props){
        super(props);
        this.deleteSession = this.deleteSession.bind(this);
        this.state = { sessions: [] }
    }

    componentDidMount() { //adds list of exercises to state before page gen
        axios.get('http://localhost:5000/sessions/')
        .then(response => { 
            this.setState({ sessions: response.data }); //gets all fields in sessions
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //DELETE SESSION
    deleteSession(id) {
        axios.delete('http://localhost:5000/sessions/' + id)
            .then(res => console.log(res.data));

        this.setState({ //updates page state upon deletion.
            exercises: this.state.session.filter(el => el._id !== id)
        })
    }

    sessionList() {
        return this.state.sessions.map(currentsession => {
            return <Session session={currentsession} deleteSession={this.deleteSession}key={currentsession._id}/>;
        })
    }

    render() {
        return (
          <div>
            <h3>Logged Sessions</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Campaign</th>
                  <th>Character</th>
                  <th>Session Log</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.sessionList() }
              </tbody>
            </table>
          </div>
        )
      }
    }
