import React from "react";
import { useState } from "react";
import {
  Offcanvas,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Dropdown,
  DropdownButton,
  Card,
} from "react-bootstrap";

export default function Header(props) {
  const { logged_in, current_user, cocktails, deleteCocktail } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (id) => {
    deleteCocktail(id);
    location.reload();
  };

  return (
    <>
      <Navbar
        className="color-nav"
        fixed="top"
        collapseOnSelect
        expand="lg"
        >
           
            <div className="logo">
              <Navbar.Brand style={{color: "white"}} href="/">
                <img
                  class="img-responsive"
                  src="https://media.istockphoto.com/vectors/blue-cocktail-gender-reveal-icon-vector-id1251379036?b=1&k=20&m=1251379036&s=170x170&h=1soApZXiiWE5pv9VkgjhV7sz3QcioHUv361lD0gO_VU="
                />
                LastCall
              </Navbar.Brand>
            </div>
              
            <div className="header-btn">
              {logged_in && (
                <Button variant="outline-light" onClick={handleShow}>
                  My Cocktails
                </Button>
              )}
            </div>
            <div className="header-btn">
              <DropdownButton
                variant="outline-light"
                id="dropdown-basic-button"
                title="Pick Your Poison"
              >
                <Dropdown.Item href="/lastcallindex"> Cocktails </Dropdown.Item>
                <Dropdown.Item href="/lastcallsearch">
                  {" "}
                  Find Cocktail{" "}
                </Dropdown.Item>
                {logged_in && (
                  <Dropdown.Item href="/lastcallnew">
                    {" "}
                    New Cocktail{" "}
                  </Dropdown.Item>
                )}
              </DropdownButton>
            </div>

         
            <div className="header-btn">
              <DropdownButton
                className="account"
                variant="outline-light"
                id="dropdown-basic-button"
                title="Account"
              >
                {logged_in && (
                  <Dropdown.Item id="logout" href="/users/sign_out">
                    {" "}
                    Sign Out{" "}
                  </Dropdown.Item>
                )}
                {!logged_in && (
                  <Dropdown.Item href="/users/sign_in"> Sign In </Dropdown.Item>
                )}
                {!logged_in && (
                  <Dropdown.Item href="/users/sign_up"> Sign Up </Dropdown.Item>
                )}
              </DropdownButton>
            </div>
           
      </Navbar>

      {logged_in && cocktails && (
        <>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{current_user.email} Cocktails</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {cocktails &&
                cocktails
                  .filter(
                    (cocktailObj) => cocktailObj.user_id === current_user.id
                  )
                  .map((cocktailObj, index) => {
                    return (
                      <Card
                        style={{ backgroundColor: "transparent" }}
                        id="indexCard"
                        key={index}
                      >
                        <Card.Img variant="top" src={cocktailObj.image} />
                        <Card.Body>
                          <Card.Title>{cocktailObj.name}</Card.Title>
                          <Button
                            href={`/lastcallshow/${cocktailObj.id}`}
                            variant="dark"
                          >
                            More Info
                          </Button>
                          <Button
                            href={`/lastcalledit/${cocktailObj.id}`}
                            variant="dark"
                          >
                            Edit
                          </Button>
                          <Button
                            className="mine"
                            onClick={() => handleClick(cocktailObj.id)}
                            variant="dark"
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}
