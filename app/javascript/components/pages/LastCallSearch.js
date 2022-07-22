import React, { useState, useRef } from "react";
import { Form, Button, Card, Container, Row, Stack } from "react-bootstrap";
import Ingredient from "./Ingredient.js";

export default function LastCallSearch(props) {
  let [searchResult, setSearchResult] = useState([]);
  let [ingredient, setIngredient] = useState("");

  const ingRef = useRef(null);
  const { cocktails } = props;

  function handleCocktailArray(e) {
    e.preventDefault();
    if (ingredient) {
      cocktails.forEach((cocktailObj) => {
        let includeIng = cocktailObj.ingredients
          .join(", ")
          .toLowerCase()
          .includes(ingredient.toLowerCase());
        let includeName = cocktailObj.name
          .toLowerCase()
          .includes(ingredient.toLowerCase());

        if (includeIng || includeName) {
          if (!searchResult.includes(cocktailObj)) {
            searchResult.push(cocktailObj);
            setSearchResult(searchResult);
          }
        }
      });

      setIngredient("");
      ingRef.current.reset();
    }
  }

  return (
    <>
    
      <div className="search-bar">
        <Form ref={ingRef}>
          <Form.Group>
            <Form.Label> Search </Form.Label>
            <Form.Control
              type="text"
              placeholder="Type in an ingredient or name"
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </Form.Group>
          <Button onClick={(e) => handleCocktailArray(e)}>Search</Button>
          <Button onClick={() => setSearchResult([])}>Reset</Button>
        </Form>
      </div>
      
      <Container>
        <Row md={3}>
          {searchResult !== [] &&
            searchResult.map((resultObj, index) => (
              <div>
                <Ingredient key={index} cocktail={resultObj} />
              </div>
            ))}
        </Row>
      </Container>
      
    </>
  );
}
