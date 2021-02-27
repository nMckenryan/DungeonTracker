import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

export default class TopBar extends Component {
  // Handles the Top Nav Bar.
  render() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Log List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/createSes">Create Session Log</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/createCamp">Create Campaign</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}