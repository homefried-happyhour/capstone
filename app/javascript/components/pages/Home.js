import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Home(props) {
let { cocktails } = props
  return (
    <>
      <h3 id="home-title">LastCall 🍸 cocktails without the guesswork</h3>
      <Carousel fade>
      {cocktails && cocktails.map(cocktail => {
          return(
          <Carousel.Item>    
            <img
              className="d-block w-100"
              src= {cocktail.image}
              alt="First slide"
            />           
          </Carousel.Item>
          )
        })
      }
      </Carousel>
    </>
  )
}
