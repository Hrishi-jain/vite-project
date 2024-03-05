import { useState } from 'react'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
 

  return (
    <Router>
      <Header/>
      <Background/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
