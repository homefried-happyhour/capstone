import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Ingredient(props) {
  const { cocktail } = props;
  return (
    <>
      <Card id="index-card">
        <Card.Img src={cocktail.image} alt="Card image cap" />
        <Card.Body>
          <Card.Title>{cocktail.name}</Card.Title>
          <NavLink to={`/lastcallshow/${cocktail.id}`}>
            <Button className="more-info"> More Info </Button>
          </NavLink>
        </Card.Body>
      </Card>
    </>
  );
}
