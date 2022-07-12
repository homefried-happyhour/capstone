import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cocktails: []
    }
  }
  render() {
    return (
      <>
      <div>Last Call</div>
        <Router>
          <Header/>
          <div className='app-container'>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/lastcallindex" element={<LastCallIndex/>} />
              <Route path="/lastcallshow/:id" element={<LastCallShow/>} />
              <Route path="/lastcallnew" element={<LastCallNew/>} />
              <Route path="/lastcalledit/:id" element={<LastCallEdit/>} />
              <Route element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </>
    )
  }
}
