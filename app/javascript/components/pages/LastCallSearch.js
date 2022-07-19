import React from 'react'
import { useState, useRef } from 'react'
import { Form, Button, Card, Container, Row } from 'react-bootstrap'

export default function LastCallSearch(props) {
    let [searchResult, setSearchResult] = useState([])
    let [ingredient, setIngredient] = useState("")
    let [list, setList] = useState([])
   
    const ingRef = useRef(null)
    const { cocktails } = props

    const levenshteinDistance = (s, t) => {
        if (!s.length) return t.length;
        if (!t.length) return s.length;
        const arr = [];
        for (let i = 0; i <= t.length; i++) {
          arr[i] = [i];
          for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
              i === 0
                ? j
                : Math.min(
                    arr[i - 1][j] + 1,
                    arr[i][j - 1] + 1,
                    arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                  );
          }
        }
        return arr[t.length][s.length];
      };


    console.log("ingredient: ", ingredient)

    function handleCocktailArray(e) {
        e.preventDefault()
        if (ingredient !== "") {

        cocktails.forEach(cocktailObj => {
            let includeIng = cocktailObj.ingredients.map(ing => ing.toLowerCase()).includes(ingredient.toLowerCase())
            

            let includeName = cocktailObj.name.toLowerCase() === ingredient.toLowerCase()
            console.log("wtf: ", includeIng)

            if(includeIng || includeName) {
                searchResult.push(cocktailObj)
                setSearchResult(searchResult)
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
                onChange={(e) => setIngredient(e.target.value)}
                />
            </Form.Group>
            <Button onClick={(e)=>handleCocktailArray(e)}>Search</Button>
        </Form>
        <h3>Current Ingredients</h3>
        <div id="search">
            <ul>
            {list.map((ingredient, index) => <li key={index}> {ingredient} </li>)}
            </ul>
        </div>
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


const Ingredient = (props) => {
    let { cocktail } = props
    return (
        <>
        <Card>
          <Card.Img src={cocktail.image} alt="Card image cap" />
          <Card.Body>
              <Card.Title>{cocktail.name}</Card.Title>
          </Card.Body>
        </Card>
        </>
    )
}