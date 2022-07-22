import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Container, Col, Row, Stack } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";

export default function LastCallEdit(props) {
  let { id } = useParams();
  let { editCocktail, current_user } = props;

  const [submit, setSubmit] = useState(false);
  const [cocktailEdit, setCocktailEdit] = useState({});

  const [ingredient, setIngredient] = useState("");
  const [list, setList] = useState([]);

  const [direction, setDirection] = useState("");
  const [listDir, setListDir] = useState([]);

  const ingRef = useRef(null);
  const dirRef = useRef(null);

  function showCocktails(id) {
    fetch(`/cocktails/${id}`)
      .then((request) => request.json())
      .then((payload) => {
        setCocktailEdit(payload);
        setList(payload.ingredients);
        setListDir(payload.directions);
      })
      .catch((err) => console.errors(err));
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
      <div className="component">
        {cocktailEdit.user_id === current_user.id && (
          <Container className="form-container">
            <Row>
              <Col>
                <h2>Edit a Cocktail</h2>
                <Stack gap={3}>
                  <Form>
                    <Form.Group>
                      <Form.Label> Name </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={cocktailEdit.name}
                        onChange={(e) =>
                          setCocktailEdit({
                            ...cocktailEdit,
                            name: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Form>

                  <Form ref={ingRef}>
                    <Form.Group>
                      <Stack direction="horizontal" gap={5}>
                        <Form.Control
                          type="text"
                          className="me-auto"
                          placeholder="Add your ingredients here"
                          onChange={(e) => setIngredient(e.target.value)}
                        />
                        <Button
                          style={{ width: "10rem" }}
                          onClick={() => handleCocktailArray(ingredient)}
                        >
                          Add Ingredient
                        </Button>
                      </Stack>
                    </Form.Group>
                  </Form>
                  <Form ref={dirRef}>
                    <Form.Group>
                      <Stack direction="horizontal" gap={5}>
                        <Form.Control
                          type="text"
                          placeholder="Add one step at a time"
                          onChange={(e) => setDirection(e.target.value)}
                        />
                        <Button
                          style={{ width: "10rem" }}
                          onClick={() => handleDirectionArray(direction)}
                        >
                          Add Step
                        </Button>
                      </Stack>
                    </Form.Group>
                  </Form>
                </Stack>
                <Row>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label> Image </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Image"
                        value={cocktailEdit.image}
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
                        <div className="btn-container">
                          <Button className="submit-button" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  <Row>
                    <div className="contain">
                      <img src={cocktailEdit.image} alt={cocktailEdit.name} />
                    </div>
                  </Row>
                </Row>
              </Col>

              <Col>
                <Row>
                  <h3>Current Ingredients</h3>
                  <div id="ingredients">
                    <ul>
                      {list.map((ingredient, index) => (
                        <li key={index}>
                          {" "}
                          <Button
                            className="subtract"
                            onClick={() =>
                              setList(list.filter((ing) => ing !== ingredient))
                            }
                          >
                            {" "}
                            -{" "}
                          </Button>{" "}
                          {ingredient}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
                <Row>
                  <h3>Current Directions</h3>
                  <div id="directions">
                    <ol>
                      {listDir.map((direction, index) => (
                        <li key={index}>
                          <Button
                            className="subtract"
                            onClick={() =>
                              setListDir(
                                listDir.filter((dir) => dir !== direction)
                              )
                            }
                          >
                            {" "}
                            -{" "}
                          </Button>{" "}
                          {direction}{" "}
                        </li>
                      ))}
                    </ol>
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
