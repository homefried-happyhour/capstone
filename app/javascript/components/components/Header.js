import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <Nav>
        <NavItem>
          <a href={"/"} className="nav-link">Home</a>
        </NavItem>
        <NavItem>
          <a href={"/lastcallindex"} className="nav-link">All Cocktails</a>
        </NavItem>
        {logged_in &&
          <NavItem>
            <a href={'/lastcallprotectedindex'} className="nav-link">My Cocktails</a>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <a href={sign_out_route} className="nav-link">Sign Out</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={sign_in_route} className="nav-link">Sign In</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={new_user_route} className="nav-link">Sign Up</a>
          </NavItem>
        }
      </Nav>
    )
  }
}
