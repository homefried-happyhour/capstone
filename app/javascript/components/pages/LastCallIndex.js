import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function LastCallIndex(props) {
  const { cocktails } = props;
  return (
    <>
      <Container fluid="md">
        <Row md={2} lg={3}>
          {cocktails &&
            cocktails.map((value, index) => {
              return (
                <div>
                  <Card id="index-card" key={index}>
                    <Card.Img src={value.image} alt={value.name} />
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <NavLink to={`/lastcallshow/${value.id}`}>
                        <Button className="more-info"> More Info </Button>
                      </NavLink>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
