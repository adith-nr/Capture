import React from 'react'


import './App.css'
import Navbar from './comp/Navbar'
import HeroSec from './comp/HeroSec'
import AboutSec from './comp/AboutSec'
import ModelSpec from './comp/ModelSpec'
import Capture from './comp/Capture'
import Footer from './comp/Footer'

function App() {
  return (
      <div>
        <Navbar/>
        <section id='home'> <HeroSec/></section>
        <section id='about'><AboutSec/></section>
        <section id='model'><ModelSpec/></section>
       
        <section id='capture'><Capture/></section>
        <Footer/>
      </div>
  )
}

export default App
