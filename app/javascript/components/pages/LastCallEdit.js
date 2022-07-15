import React from 'react'
import { useState, useRef } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

export default function LastCallEdit(props) {

  let { editCocktail, current_user, logged_in } = props

  const [submit, setSubmit] = useState(false)
  const [cocktailEdit, setCocktailEdit] = useState({
    name: "",
    image: "",
    ingredients: [""],
    directions: [""],
    user_id: current_user.id
  })

  const [ingredient, setIngredient] = useState("")
  const [list, setList] = useState([])

  const [direction, setDirection] = useState("")
  const [listDir, setListDir] = useState([])

  const ingRef = useRef(null)
  const dirRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    editCocktail(cocktailEdit)
    setSubmit(true)
  }


  function handleCocktailArray(ing, e) {
    e.preventDefault()
    if (ing !== "") {
      list.push(ing)
      setList(list)
      setCocktailEdit({ ...cocktailEdit, ingredients: list })
      setIngredient("")
    }
    ingRef.current.reset()
  }



  function handleDirectionArray(dir, e) {
    e.preventDefault()
    if (dir !== "") {
      listDir.push(dir)
      setListDir(listDir)
      setCocktailEdit({ ...cocktailEdit, directions: listDir })
      setDirection("")
    }
    dirRef.current.reset()
  }

  return (
    <>

      <div >
        <Container className="form-container">
          <Row>
            <Col>
              <Row>
                <h2>Edit a Cocktail</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group >
                    <Form.Label> Name </Form.Label>
                    <Form.Control
                      type="text" placeholder="Name"
                      onChange={(e) => setCocktailEdit({ ...cocktailEdit, name: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Image </Form.Label>
                    <Form.Control
                      type="text" placeholder="Image"
                      onChange={(e) => setCocktailEdit({ ...cocktailEdit, image: e.target.value })}
                    />
                  </Form.Group>
                  <Button type="submit"> Submit </Button>
                </Form>
                <Row>
                  <Form ref={ingRef} >
                    <Form.Group>
                      <Form.Label> Ingredients </Form.Label>
                      <Form.Control
                        type="text" placeholder="Ingredients"
                        onChange={(e) => setIngredient(e.target.value)}
                      />
                    </Form.Group>
                    <Button onClick={(e) => handleCocktailArray(ingredient, e)}>Add Ingredient</Button>
                  </Form>
                </Row>
                <Row>
                  <Form ref={dirRef} >
                    <Form.Group>
                      <Form.Label> Directions </Form.Label>
                      <Form.Control
                        type="text" placeholder="Add one step at a time"
                        onChange={(e) => setDirection(e.target.value)}
                      />
                    </Form.Group>
                    <Button onClick={(e) => handleDirectionArray(direction, e)}>Add Step</Button>
                  </Form>
                </Row>
                <Row>
                  <div id="preview">
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
                    {list.map((ingredient, index) => <li key={index}> {ingredient} </li>)}
                  </ul>
                </div>
              </Row>
              <Row>
                <h3>Current Directions</h3>
                <div id="directions">
                  <ul>
                    {listDir.map((direction, index) => <li key={index}> {direction} </li>)}
                  </ul>
                </div>
              </Row>
            </Col>

          </Row>



        </Container>
      </div>
      {submit && <Navigate replace to="/lastcallindex" />}
    </>
  )
}
