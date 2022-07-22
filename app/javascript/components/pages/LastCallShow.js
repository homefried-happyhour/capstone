import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink, useParams, Navigate } from "react-router-dom";

export default function LastCallShow(props) {
  let [remove, setRemove] = useState(false);

  const { logged_in, deleteCocktail, readCocktails, current_user } = props;
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
            <div className="btn-container">
              <Button href="/">Home</Button>
              {logged_in && cocktail.user_id == current_user.id && (
                <>
                  <NavLink to={`/lastcalledit/${id}`}>
                    <Button> Edit </Button>
                  </NavLink>

                  <Button onClick={() => handleDelete(id)}> Remove </Button>
                </>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
      {remove && <Navigate replace to="/lastcallindex" />}
    </>
  );
}
