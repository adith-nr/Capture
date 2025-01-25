import React from 'react'
import './AboutSec.css'
import letters from './letters.png'
function AboutSec() {
  return (
    <div className='about'>
      <h3 id='aboutt'>About</h3>
      <div className="acont">
        <div className="aleft">
          <img src={letters} alt="" />
        </div>
        <div className="aright">
        <p id='adesc'>Our project is an advanced text extraction tool that leverages deep learning to recognize and extract text from images, similar to captchas. The system is designed with a React frontend for a seamless user experience and a Flask backend for handling requests and processing images efficiently.  </p>
        </div>
       
      
       
      </div>
      
       
     
    </div>
  )
}

export default AboutSec
