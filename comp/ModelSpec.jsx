import React from 'react'
import './ModelSpec.css'
import accuracy from './accuracy.png'
function ModelSpec() {
  return (
    <div className='modelspec'>
       <h3 id='mtitle'>ModelSpecs</h3>
       <div className="cards">
          <div className="item">
            <img id='itemimg' src={accuracy} alt="" />
            <b style={{color:'#39FF14'}} >Accuracy: 62.46%</b>
            <p>
            Since a captcha in the test data consists of 5 characters, The current model can 
            recognize on an averge 3 out of 5 characters correctly.
            </p>
          </div>
          <div className="item">
          <img id='itemimg' src={accuracy} alt="" />
          <b style={{color:'#39FF14'}} >Type: Image Recognition</b>
          <p>
            The model works by recognizing individual characters like the MNIST Datset,
            where instead of 10 characters it recognizes 61 characters. 
          </p>
          </div>
          <div className="item">
          <img id='itemimg' src={accuracy} alt="" />
          <b style={{color:'#39FF14'}} >Model: CNN</b>
          <p>
          The model uses a sequential function with 4 layers and 1,202,741 parameters. It preprocesses input images with edge detection, resizing, and binarization.
          </p>
          </div>
       </div>
       
       
    </div>
  )
}

export default ModelSpec
