import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <>
      <Nav>
        <NavItem>
          <a href={"/about"} className="nav-link">About Us</a>
        </NavItem>
      </Nav>
    </>
    )
  }
}
