import React, { Component } from 'react'
import { Nav, NavItem, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
        <NavLink to={"/"}>
          <Button>Home</Button>
        </NavLink>
        <NavLink to={"/lastcallindex"}>
          <Button >All Cocktails</Button>
        </NavLink>
        {logged_in &&
          <NavLink to={'/lastcallprotectedindex'}>
            <Button>My Cocktails</Button>
          </NavLink>
        }
        {logged_in &&
          <NavLink to={'/lastcallnew'}>
            <Button>New Cocktail</Button>
          </NavLink>
        }
        {logged_in &&
          <NavItem >
            <Button href={sign_out_route}>Sign Out</Button>
          </NavItem>
        }
        {!logged_in &&
          <NavItem >
            <Button href={sign_in_route}>Sign In</Button>
          </NavItem>
        }
        {!logged_in &&
          <NavItem >
            <Button href={new_user_route}>Sign Up</Button>
          </NavItem>
        }
      </Nav>
    )
  }
}
