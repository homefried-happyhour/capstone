import React from 'react'
import { Navbar, Button } from 'react-bootstrap'


export default function Footer() {
  return (
    <>
      <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
        
          <Button className="ms-auto" variant="outline-light" href="/about">About Us</Button>
        
      </Navbar>
    </>
  )
}
