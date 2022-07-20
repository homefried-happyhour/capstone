import React from 'react'
import { useState, useRef } from 'react'
import { Form, Button, Card, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Ingredient from './Ingredient.js'

export default function LastCallSearch(props) {
    let [searchResult, setSearchResult] = useState([])
    let [ingredient, setIngredient] = useState("")
   
    const ingRef = useRef(null)
    const { cocktails } = props

    console.log("ingredient: ", ingredient)

    function handleCocktailArray(e) {
        e.preventDefault()
        if (ingredient !== "") {

        cocktails.forEach(cocktailObj => {
            let includeIng = cocktailObj.ingredients.join(", ").toLowerCase().includes(ingredient.toLowerCase())
            let includeName = cocktailObj.name.toLowerCase().includes(ingredient.toLowerCase())

            if(includeIng || includeName) {
                    if(!searchResult.includes(cocktailObj)){
                        searchResult.push(cocktailObj) 
                        setSearchResult(searchResult)
                    }
            } 
        })
        
        setIngredient("")
        ingRef.current.reset()
    }
    }
      console.log("results: ", searchResult)

    
  return (
    <>
        <Form ref={ingRef} >
            <Form.Group>
                <Form.Label> Search </Form.Label>
                <Form.Control
                type="text" placeholder="Search"
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                onChange={(e) => setIngredient(e.target.value)}
                />
            </Form.Group>
            <Button onClick={(e)=>handleCocktailArray(e)}>Search</Button>
            <Button onClick={()=>setSearchResult([])}>Reset</Button>
        </Form>
        <Container>
        <Row  xd={1} md={3}>

        {searchResult !== [] && searchResult.map((resultObj, index) => {
            return (           
                <Ingredient key={index} cocktail={resultObj}/>
                )
        })}
        </Row>
        </Container>
    </>
  )
}


