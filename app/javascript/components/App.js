import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LastCallIndex from "./pages/LastCallIndex";
import LastCallSearch from "./pages/LastCallSearch";
import LastCallShow from "./pages/LastCallShow";
import LastCallNew from "./pages/LastCallNew";
import LastCallEdit from "./pages/LastCallEdit";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

export default function App(props) {
  let [cocktails, setCocktails] = useState([]);
  let [hasErrors, setErrors] = useState(false);

  function readCocktails() {
    fetch("/cocktails")
      .then((response) => response.json())
      .then((payload) => setCocktails(payload))
      .catch((errors) => {
        setErrors(errors);
        console.errors(hasErrors);
      });
  }
  function createCocktail(newCocktail) {
    fetch("/cocktails", {
      body: JSON.stringify(newCocktail),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => setCocktails(readCocktails()))
      .catch((errors) => {
        setErrors(errors);
        console.error(hasErrors);
      });
  }

  function editCocktail(cocktail, id) {
    fetch(`/cocktails/${id}`, {
      body: JSON.stringify(cocktail),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => setCocktails(readCocktails()))
      .catch((errors) => {
        setErrors(errors);
        console.error(hasErrors);
      });
  }

  function deleteCocktail(id) {
    fetch(`/cocktails/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.warn(response);
      });
    });
  }

  useEffect(() => {
    readCocktails();
  }, []);

  return (
    <>
      <Router>
        <Header
          {...props}
          cocktails={cocktails}
          deleteCocktail={deleteCocktail}
        />
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<Home cocktails={cocktails} />} />

            <Route
              path="/lastcallsearch"
              element={<LastCallSearch cocktails={cocktails} />}
            />

            <Route
              path="/lastcallindex"
              element={<LastCallIndex cocktails={cocktails} />}
            />

            <Route
              path="/lastcallshow/:id"
              element={
                <LastCallShow
                  {...props}
                  cocktails={cocktails}
                  deleteCocktail={deleteCocktail}
                  readCocktails={readCocktails}
                />
              }
            />

            <Route
              path="/lastcallnew"
              element={
                <LastCallNew {...props} createCocktail={createCocktail} />
              }
            />

            <Route
              path="/lastcalledit/:id"
              element={
                <LastCallEdit
                  {...props}
                  cocktails={cocktails}
                  editCocktail={editCocktail}
                />
              }
            />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
