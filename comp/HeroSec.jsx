import React from 'react'
import './HeroSec.css'

import h from './h.jpg'

function HeroSec() {
  return (
    <div className='Hero'>
    <div className="left">
      <p id='look'>Look here Pookie!</p>
      <h2 id='terminal'>Wanna Capture?</h2>
      <p id='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque odit nam labore facilis, limilique inam, doloribus officiis! Saepe libero officia ipsum. Harum, cum.</p>
    </div>
      <div className="right">
        <img src={h} alt="" />

      </div>
    </div>
  )
}

export default HeroSec
