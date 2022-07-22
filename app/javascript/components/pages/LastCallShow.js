import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink, useParams, Navigate } from "react-router-dom";

export default function LastCallShow(props) {
  let [remove, setRemove] = useState(false);

  const { logged_in, deleteCocktail, readCocktails } = props;
  const { id } = useParams();

  const { cocktails } = props;
  let cocktail = cocktails.find((cocktailObj) => cocktailObj.id == id);

  const handleDelete = (id) => {
    deleteCocktail(id);
    readCocktails();
    setRemove(true);
  };

  return (
    <>
      {cocktail && (
        <Card id="show-card">
          <Card.Img src={cocktail.image} alt="Card image cap" />
          <Card.Body>
            <Card.Title>{cocktail.name}</Card.Title>
            <Card.Subtitle>Ingredients</Card.Subtitle>
            <Card.Text>
              {cocktail.ingredients.map((ingredient, index) => {
                return <li key={index}> {ingredient} </li>;
              })}
            </Card.Text>
            <Card.Subtitle>Directions</Card.Subtitle>
            <Card.Text>
              {cocktail.directions.map((direction, index) => {
                return <li key={index}> {direction} </li>;
              })}
            </Card.Text>

            {logged_in && (
              <>
                <NavLink to={`/lastcalledit/${id}`}>
                  <Button id="edit"> Edit </Button>
                </NavLink>

                <Button id="delete" onClick={() => handleDelete(id)}>
                  {" "}
                  Remove{" "}
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      )}
      {remove && <Navigate replace to="/lastcallindex" />}
    </>
  );
}
