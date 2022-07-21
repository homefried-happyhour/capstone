import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";

export default function LastCallEdit(props) {
  let { id } = useParams();
  let { editCocktail, current_user, logged_in } = props;

  const [submit, setSubmit] = useState(false);
  const [cocktailEdit, setCocktailEdit] = useState({
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

  let [cocktail, setCocktail] = useState([]);

  console.log("show:", logged_in);
  console.log("data", cocktail.user_id);
  function showCocktails(id) {
    fetch(`/cocktails/${id}`)
      .then((request) => request.json())
      .then((payload) => setCocktail(payload))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editCocktail(cocktailEdit, id);
    setSubmit(true);
  }

  function handleCocktailArray(ing) {
    if (ing !== "") {
      list.push(ing);
      setList(list);
      setCocktailEdit({ ...cocktailEdit, ingredients: list });
      setIngredient("");
    }
    ingRef.current.reset();
  }

  function handleDirectionArray(dir) {
    if (dir !== "") {
      listDir.push(dir);
      setListDir(listDir);
      setCocktailEdit({ ...cocktailEdit, directions: listDir });
      setDirection("");
    }
    dirRef.current.reset();
  }

  useEffect(() => {
    showCocktails(id);
  }, []);

  return (
    <>
      <div>
        {cocktail.user_id === current_user.id && (
          <Container className="form-container">
            <Row>
              <Col>
                <h2>Edit a Cocktail</h2>

                <Row>
                  <Form>
                    <Form.Group>
                      <Form.Label> Name </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) =>
                          setCocktailEdit({
                            ...cocktailEdit,
                            name: e.target.value,
                          })
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
                  <div id="preview">
                    <img src={cocktailEdit.image} alt={cocktailEdit.name} />
                  </div>
                </Row>
                <Row>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label> Image </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Image"
                        onChange={(e) =>
                          setCocktailEdit({
                            ...cocktailEdit,
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
        )}
      </div>

      {submit && <Navigate replace to="/lastcallindex" />}
    </>
  );
}
