import React from 'react'
import { useState, useRef } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

export default function LastCallNew(props) {
  
  let {createCocktail, current_user, logged_in } = props
  
  const [submit, setSubmit] = useState(false)
  const [cocktailNew, setCocktailNew] = useState({
    name: "",
    image:"",
    ingredients: [],
    directions: [],
    user_id: current_user.id
  })
  const [ingredient, setIngredient] = useState("")
  const [list,setList] = useState([])
  const [direction,setDirection] = useState("")
  const [listDir, setListDir] = useState([])
  
  const ingRef = useRef(null)
  const dirRef = useRef(null)

  console.log(cocktailNew.ingredients)
  const handleSubmit = (e) => {
    console.log(cocktailNew)
    e.preventDefault()
    setCocktailNew({...cocktailNew, ingredients: list})
    setCocktailNew({...cocktailNew, directions: direction})
    createCocktail(cocktailNew)
    setSubmit(true)
  }


  const handleCocktailArray = (ing, e) => {
    e.preventDefault()
    if(ing !== ""){
        list.push(ing)    
        setList(list)
        setIngredient("")
    }
    ingRef.current.reset()
  }
  const handleDirectionArray = (dir, e) => {
    e.preventDefault()
    if(dir !== ""){
        listDir.push(dir)    
        setListDir(listDir)
        setDirection("")
    }
    dirRef.current.reset()
  }
  console.log("one: ", list)

  return (
    <>
    <Container>
        <Row>
        <Col>
    <div className="form-new-listing">
      <h2>Make a new Cocktail</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label> Name </Form.Label>
            <Form.Control
            type="text" placeholder="Name"
            onChange={(e) => setCocktailNew({...cocktailNew, name: e.target.value})}
            />
            </Form.Group>

            <Form.Group>
            <Form.Label> Image </Form.Label>
            <Form.Control
            type="text" placeholder="Image"
            onChange={(e) => setCocktailNew({...cocktailNew, image: e.target.value})}
            />
            </Form.Group>
          
          <Button type="submit" > Submit </Button>
        </Form>
    </div>
      {submit && <Navigate replace to="/lastcallindex"/>}
      </Col>
      <Col>
      <Form ref={ingRef} >
            <Form.Group>
            <Form.Label> Ingredients </Form.Label>
            <Form.Control
            type="text" placeholder="Ingredients"
            onChange={(e) => setIngredient(e.target.value)}
            />
            </Form.Group>
            <Button onClick={(e)=>handleCocktailArray(ingredient, e)}>Add Ingredient</Button>
        </Form>
    <div id="ingredients">
        <h3>Current Ingredients</h3>
        <ul>
        {list.map((ingredient, index) => {
            return (
                <li key={index}> {ingredient} </li>
            )
        })
        }
        </ul>
    </div>
    </Col>
    <Col>
      <Form ref={dirRef} >
            <Form.Group>
            <Form.Label> Directions </Form.Label>
            <Form.Control
            type="text" placeholder="Add one step at a time"
            onChange={(e) => setDirection(e.target.value)}
            />
            </Form.Group>
            <Button onClick={(e)=>handleDirectionArray(direction, e)}>Add Step</Button>
        </Form>
    <div id="directions">
        <h3>Current Directions</h3>
        <ul>
        {listDir.map((direction, index) => {
            return (
                <li key={index}> {direction} </li>
            )
        })
        }
        </ul>
    </div>
    </Col>
    </Row>
    </Container>
  </>
  )
}
