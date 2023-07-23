import React from 'react'

import  images from '../../constants/images';
import './ClimateChangeInfo.css';

const ClimateChangeInfo = () => {
  return (
    <div className='app__climatechangeinfo-section'>
      <div className="row">
        <div className="app__climatechangeinfo-content">
          <img src={images.climateChangeBg} alt="climate bg" width={"100%"} />
          <div className="app__climatechangeinfo-details">
            <p>EVIDENCE</p>
            <h2>How Do You Know Climate Change is Real</h2>
            <h3>There is unequivocal evidence that Earth is warming at an unprecedented rate. Human activity is the principal cause.</h3>
          </div>
        </div>
        <div className="app__climatechangeinfo-content">
          <img src={images.climateChangeBg} alt="climate bg" width={"100%"} />
          <div className="app__climatechangeinfo-details">
            <p>CAUSES</p>
            <h2>Why Is Climate Change Happening</h2>
            <h3>Human activities are driving the global warming trend observed since the mid-20th century.</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="app__climatechangeinfo-content">
          <img src={images.climateChangeBg} alt="climate bg" width={"100%"} />
          <div className="app__climatechangeinfo-details">
            <p>EVIDENCE</p>
            <h2>How Do You Know Climate Change is Real</h2>
            <h3>There is unequivocal evidence that Earth is warming at an unprecedented rate. Human activity is the principal cause.</h3>
          </div>
        </div>
        <div className="app__climatechangeinfo-content">
          <img src={images.climateChangeBg} alt="climate bg" width={"100%"} />
          <div className="app__climatechangeinfo-details">
            <p>CAUSES</p>
            <h2>Why Is Climate Change Happening</h2>
            <h3>Human activities are driving the global warming trend observed since the mid-20th century.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClimateChangeInfo
