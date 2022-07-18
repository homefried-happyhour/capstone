import React from 'react'
import { Navbar, Button } from 'react-bootstrap'


export default function Footer() {
  return (
    <>
      <Navbar className="color-nav" fixed="bottom" collapseOnSelect expand="lg" variant="dark">
          <p style={{color:"white"}}>&copy; Homefried-Happy-Hour 2022</p>
          <Button className="mx-auto" variant="outline-light" href="/about">About Us</Button>
          
      </Navbar>
    </>
  )
}
