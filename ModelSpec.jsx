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
            Accuracy: xyz
          </div>
          <div className="item">
          <img id='itemimg' src={accuracy} alt="" />
            Type:
          </div>
          <div className="item">
          <img id='itemimg' src={accuracy} alt="" />
            Metric:
          </div>
       </div>
       
       
    </div>
  )
}

export default ModelSpec
