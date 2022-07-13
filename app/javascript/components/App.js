import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import LastCallIndex from './pages/LastCallIndex'
import LastCallProtectedIndex from './pages/LastCallProtectedIndex'
import LastCallShow from './pages/LastCallShow'
import LastCallNew from './pages/LastCallNew'
import LastCallEdit from './pages/LastCallEdit'
import NotFound from './pages/NotFound'
import About from './pages/About'

export default class App extends Component {
  constructor(props) {
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
          <Header {...this.props} />
          <div className='app-container'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/lastcallindex" element={<LastCallIndex />} />
              <Route path="/lastcallprotectedindex" element={<LastCallProtectedIndex />} />
              <Route path="/lastcallshow" element={<LastCallShow />} />
              <Route path="/lastcallnew" element={<LastCallNew />} />
              <Route path="/lastcalledit" element={<LastCallEdit />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </>
    )
  }
}
