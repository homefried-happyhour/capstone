import React from 'react'
import { useState } from 'react'
import { Offcanvas, Button, Container, Navbar, Dropdown, DropdownButton, Card } from 'react-bootstrap'

export default function Header(props) {
  
    const {
      logged_in,
      current_user,
      cocktails,
      deleteCocktail
    } = props

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (id) => {
      deleteCocktail(id)
      location.reload()
    }
  
    return (
      <>
      
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>

                <Navbar.Brand href="/"> LastCall </Navbar.Brand>
                <DropdownButton variant="outline-light" id="dropdown-basic-button" title="Pages">
                  <Dropdown.Item href="/lastcallindex"> Cocktails </Dropdown.Item>
                  {logged_in &&
                  <Dropdown.Item href="/lastcallnew"> New Cocktail </Dropdown.Item>
                  }
                </DropdownButton>

                {logged_in &&     
                <Button variant="outline-light" onClick={handleShow}>
                      My Cocktails
                </Button>
                }    

                <DropdownButton variant="outline-light" id="dropdown-basic-button" title="Account">
                    {logged_in &&  
                        <Dropdown.Item id="logout" href="/users/sign_out"> Sign Out </Dropdown.Item>
                    }
              
                    {!logged_in &&
                        <Dropdown.Item href="/users/sign_in"> Sign In </Dropdown.Item>
                    }
                
                    {!logged_in &&
                        <Dropdown.Item href="/users/sign_up"> Sign Up </Dropdown.Item>
                    }
                </DropdownButton>

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
                            
                              <Button href={`/lastcallshow/${cocktailObj.id}`} variant="dark">More Info</Button>
                              <Button href={`/lastcalledit/${cocktailObj.id}`} variant="dark">Edit</Button>
                              <Button onClick={()=>handleClick(cocktailObj.id)}variant="dark">Delete</Button>
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
