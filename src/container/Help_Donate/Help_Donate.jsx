import React from 'react'

import  images from '../../constants/images';
import './Help_Donate.css';

const Help_Donate = () => {
    const scrollRef = React.useRef(null);

  return (
    <div className='app__gallery'>
        <div className="app__gallery-content">
            <h2 className='app__gallery-heading' >Help & Donate</h2>
            <p className='app__gallery-text' style={{marginTop: '2rem'}}>Vim audire labores insolens ut. Iisque imperdiet sea at, ea est porro appart.</p>
            <button type="button" className='custom__button' style={{marginTop: '2rem'}}>View More</button>
        </div>

        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
                <div className="app__gallery-Image_card" >
                    <img src={images.gallery01} alt="gallery image" />
                    <h1 style={{background: 'lightgrey'}}>Climate Change Problem</h1>
                    <p style={{background: 'lightgrey'}}>Lorem ipsum dolor sit amet, eu soleat nonumes salutandi nam, iusto delectus senserit ius in, ipsum epicurei evertitur</p>
                </div>
                <div className="app__gallery-Image_card" >
                    <img src={images.gallery02} alt="gallery image" />
                    <h1 style={{background: 'lightgrey'}}>Our Oceans Need Help</h1>
                    <p style={{background: 'lightgrey'}}>Lorem ipsum dolor sit amet, eu soleat nonumes salutandi nam, iusto delectus senserit ius in, ipsum epicurei evertitur</p>
                </div>
                <div className="app__gallery-Image_card" >
                    <img src={images.gallery03} alt="gallery image" />
                    <h1 style={{background: 'lightgrey'}}>Endangered Animals</h1>
                    <p style={{background: 'lightgrey'}}>Lorem ipsum dolor sit amet, eu soleat nonumes salutandi nam, iusto delectus senserit ius in, ipsum epicurei evertitur</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Help_Donate
