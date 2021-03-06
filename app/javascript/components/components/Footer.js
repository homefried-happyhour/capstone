import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Navbar className="color-nav" fixed="bottom" collapseOnSelect expand="md">
        <div>
          <p id="copyright" style={{ color: "white" }}>
            &copy; Homefried-Happy-Hour 2022
          </p>
        </div>
        <div className="about-us-btn">
          <Button href="/about">About Us</Button>
        </div>
      </Navbar>
    </>
  );
}
