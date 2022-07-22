import React, { useState, useRef } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export default function LastCallNew(props) {
  let { createCocktail, current_user, logged_in } = props;

  const [submit, setSubmit] = useState(false);
  const [cocktailNew, setCocktailNew] = useState({
    name: "",
    image: "",
    ingredients: [""],
    directions: [""],
    user_id: current_user.id,
  });

  const [ingredient, setIngredient] = useState("");
  const [list, setList] = useState([]);

  const [direction, setDirection] = useState("");
  const [listDir, setListDir] = useState([]);

  const ingRef = useRef(null);
  const dirRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    createCocktail(cocktailNew);
    setSubmit(true);
  }

  function handleCocktailArray(ing) {
    e.preventDefault();
    if (ing !== "") {
      list.push(ing);
      setList(list);
      setCocktailNew({ ...cocktailNew, ingredients: list });
      setIngredient("");
    }
    ingRef.current.reset();
  }

  function handleDirectionArray(dir) {
    e.preventDefault();
    if (dir !== "") {
      listDir.push(dir);
      setListDir(listDir);
      setCocktailNew({ ...cocktailNew, directions: listDir });
      setDirection("");
    }
    dirRef.current.reset();
  }

  return (
    <>
      <div>
        <Container className="form-container">
          <Row>
            <Col>
              <h2>Make a new Cocktail</h2>
              <Row>
                <Form>
                  <Form.Group>
                    <Form.Label> Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      onChange={(e) =>
                        setCocktailNew({ ...cocktailNew, name: e.target.value })
                      }
                    />
                  </Form.Group>
                </Form>
              </Row>
              <Row>
                <Form ref={ingRef}>
                  <Form.Group>
                    <Form.Label> Ingredients </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingredients"
                      onChange={(e) => setIngredient(e.target.value)}
                    />
                  </Form.Group>
                  <Button onClick={() => handleCocktailArray(ingredient)}>
                    Add Ingredient
                  </Button>
                </Form>
              </Row>
              <Row>
                <Form ref={dirRef}>
                  <Form.Group>
                    <Form.Label> Directions </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add one step at a time"
                      onChange={(e) => setDirection(e.target.value)}
                    />
                  </Form.Group>
                  <Button onClick={() => handleDirectionArray(direction)}>
                    Add Step
                  </Button>
                </Form>
              </Row>
              <Row>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label> Image </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image"
                      onChange={(e) =>
                        setCocktailNew({
                          ...cocktailNew,
                          image: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button className="submit-button" type="submit">
                        {" "}
                        Submit{" "}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Row>
              <Row>
                <div id="preview">
                  <img src={cocktailNew.image} alt={cocktailNew.name} />
                </div>
              </Row>
            </Col>

            <Col>
              <Row>
                <h3>Current Ingredients</h3>
                <div id="ingredients">
                  <ul>
                    {list.map((ingredient, index) => (
                      <li key={index}> {ingredient} </li>
                    ))}
                  </ul>
                </div>
              </Row>
              <Row>
                <h3>Current Directions</h3>
                <div id="directions">
                  <ul>
                    {listDir.map((direction, index) => (
                      <li key={index}> {direction} </li>
                    ))}
                  </ul>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {submit && <Navigate replace to="/lastcallindex" />}
    </>
  );
}
