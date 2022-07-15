import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import LastCallIndex from './pages/LastCallIndex'

import LastCallShow from './pages/LastCallShow'
import LastCallNew from './pages/LastCallNew'
import LastCallEdit from './pages/LastCallEdit'
import NotFound from './pages/NotFound'
import About from './pages/About'

export default function App(props) {

  let [cocktails, setCocktails] = useState([])
  let [hasErrors, setErrors] = useState(false)

  function readCocktails() {
    fetch("/cocktails")
      .then(response => response.json())
      .then(payload => setCocktails(payload))
      .catch(errors => {
        setErrors(errors)
        console.log(hasErrors)
      })
  }
  console.log(cocktails)
  function createCocktail(newCocktail) {
    console.log("fetch method post: ", JSON.stringify(newCocktail))
    fetch("/cocktails", {
      body: JSON.stringify(newCocktail),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then(response => response.json())
      .then(payload => setCocktails(readCocktails()))
      .catch(errors => {
        setErrors(errors)
        console.log(hasErrors)
      })
  }

  function editCocktail(cocktail) {
    console.log("fetch method put: ", JSON.stringify(cocktail))
    fetch(`/cocktails/${cocktail.id}`, {
      body: JSON.stringify(cocktail),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    })
      .then(response => response.json())
      .then(payload => setCocktails(readCocktails()))
      .catch(errors => {
        setErrors(errors)
        console.log(hasErrors)
      })
  }

  function deleteCocktail(id) {
    fetch(`/cocktails/${id}`, {
      method: "DELETE"
    }).then(result => {
      result.json().then(response => {
        console.warn(response)
      })
    })
  }

  useEffect(() => {
    readCocktails()
  }, [])

  return (
    <>

      <Router>
        <div className='app-container'>
          <Header {...props} cocktails={cocktails} deleteCocktail={deleteCocktail} />
          <Routes>
            <Route exact path="/" element={<Home cocktails={cocktails} />} />
            <Route path="/lastcallindex" element={<LastCallIndex cocktails={cocktails} />} />

            <Route path="/lastcallshow/:id" element={<LastCallShow {...props} cocktails={cocktails} deleteCocktail={deleteCocktail} readCocktails={readCocktails} />} />

            <Route path="/lastcallnew" element={<LastCallNew {...props} createCocktail={createCocktail} />} />

            {/* BELOW IS WORK ON THE EDIT */}

            <Route path="/lastcalledit/:id" element={<LastCallEdit {...props} editCocktail={editCocktail} />} />

            {/* END WORK ON EDIT */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

