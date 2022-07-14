import React from 'react'
import { Card, CardBody, CardTitle, CardImg,CardText, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function LastCallShow(props) {
  let { logged_in } = props
  let { id } = useParams()
  
  let { cocktails } = props
  let cocktail = cocktails.find(cocktailObj => cocktailObj.id == id)
  

  return (
    <>                   
    {cocktail && 
      <Card>
          <CardImg top style={{ width: '10rem' }} src={cocktail.image} alt="Card image cap" />
          <CardBody>
              <CardTitle>{cocktail.name}</CardTitle>
              <CardSubtitle>Ingredients</CardSubtitle>
              <CardText>
                
                  {cocktail.ingredients.map(ingredient => {
                    return(
                       <li> {ingredient} </li>
                    )
                  })
                  }
                
              </CardText>
              <CardSubtitle>Directions</CardSubtitle>
              <CardText>
                
                  {cocktail.directions.map(direction => {
                    return(
                       <li> {direction} </li>
                    )
                  })
                  }
                
              </CardText>
              <NavLink to={`/`}>
                  <Button> Home </Button>
              </NavLink>
              {logged_in &&
              <>
                <NavLink to={`/lastcalledit/${id}`}>
                    <Button id="edit"> Edit </Button>
                </NavLink>
                
                    <Button id="delete"> Delete </Button>
                
              </>
              }
          </CardBody>
      </Card>
      }

    </>
  )
}
