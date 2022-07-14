import React from 'react'
import { useState } from 'react'
import { Offcanvas, Button, Container, Navbar, NavDropdown, Card } from 'react-bootstrap'

export default function Header(props) {
  
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      cocktails
    } = props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (id) => {
      deleteListing(id)
      location.reload()
    }
  
    return (
      <>
      
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

              <Navbar.Brand href="/"> LastCall </Navbar.Brand>
              <NavDropdown id="nav-drop" title="Pages">
                <NavDropdown.Item href="/lastcallindex"> Cocktails </NavDropdown.Item>
                {logged_in &&
                <NavDropdown.Item href="/lastcallnew"> New Cocktail </NavDropdown.Item>
                }
              </NavDropdown>

              {logged_in &&     
              <Button variant="outline-light" onClick={handleShow}>
                    My Cocktails
              </Button>
              }    

              <NavDropdown id="nav-drop" title="Account">
                  {logged_in &&  
                      <NavDropdown.Item id="logout" href="/users/sign_out"> Sign Out </NavDropdown.Item>
                  }
            
                  {!logged_in &&
                      <NavDropdown.Item href="/users/sign_in"> Sign In </NavDropdown.Item>
                  }
              
                  {!logged_in &&
                      <NavDropdown.Item href="/users/sign_up"> Sign Up </NavDropdown.Item>
                  }
              </NavDropdown>

        </Container>
      </Navbar>

      {logged_in && cocktails &&
            <>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title> {current_user.email} Cocktails </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {cocktails &&
                    cocktails.filter(cocktailObj => cocktailObj.user_id === current_user.id).map((cocktailObj, index) => {
                        return(
                        <Card id="indexCard" key={index} >
                          <Card.Img variant="top" src={cocktailObj.image} />
                          <Card.Body>
                            <Card.Title> {cocktailObj.name} </Card.Title>
                            <Card.Text>
                            </Card.Text>
                              <Button href={`/lastcallshow/${cocktailObj.id}`} variant="primary">More Info</Button>
                              <Button href={`/lastcalledit/${cocktailObj.id}`} variant="primary">Edit</Button>
                              <Button onClick={()=>handleClick(cocktailObj.id)}variant="primary">Delete</Button>
                          </Card.Body>
                        </Card>
                      )
                      }) 
                    }
                    
                  </Offcanvas.Body>
                </Offcanvas>
          </>
        }
    </>
    )
  
}
