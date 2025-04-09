import React from 'react'
import './HeroSec.css'

import h from './h.jpg'

function HeroSec() {
  return (
    <div className='Hero'>
    <div className="left">
      <p id='look'>Look here Pookie!</p>
      <h2 id='terminal'>Wanna Capture?</h2>
      <p id='desc'>Bored of doing the captchas yourself, dont worry we have a solution for your hassle. </p>
    </div>
      <div className="right">
        <img src={h} alt="" />

      </div>
    </div>
  )
}

export default HeroSec
