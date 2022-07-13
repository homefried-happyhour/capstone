import React, { Component } from 'react'
import { Nav, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
      <Nav>
        <NavLink to={"/about"} >
          <Button>About Us</Button>
        </NavLink>
      </Nav>
    </>
    )
  }
}
