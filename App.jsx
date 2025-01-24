import React from 'react'


import './App.css'
import Navbar from './comp/Navbar'
import HeroSec from './comp/HeroSec'
import AboutSec from './comp/AboutSec'
import ModelSpec from './comp/ModelSpec'
import Capture from './comp/Capture'

function App() {
  return (
      <div>
        <Navbar/>
        <HeroSec/>
        <ModelSpec/>
        <AboutSec/>
        <Capture/>
      </div>
  )
}

export default App
