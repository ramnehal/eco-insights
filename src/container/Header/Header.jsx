import React, { useState } from 'react'

import { images, data } from '../../constants';
import './Header.css';

//const SliderImages = [images.image1, images.image2, images.image3];

const Header = () =>  {
    const [slide, setSlide] = useState(0);
    /*
    const nextSlide = () => {
        setSlide(slide === SliderImages.length - 1 ? 0 : slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? SliderImages.length - 1 : slide - 1);
    }
    */
    
    const scrollRef = React.useRef(null);
    /*const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    */

    const ImageCard = ({ content: { imgUrl, title, subtitle } }) => (
        <div className="app__slider-images_card">
            <img src={imgUrl} alt="slider image" />
            <p className="image_title">{title}</p>
            <p className="image_subtitle">{subtitle}</p>
        </div>
    )

    return (
        <div className='app__slider'>
            <div className="app__slider-images">
                <div className="app__slider-images_container" ref={scrollRef}>
                    {data.SliderImages.map((content, index) => (
                        <div className={slide === index ? "slide" : "slide slide-hidden"} key={`slider_images-${index + 1}`}>
                            <ImageCard content={content} key={content.title} />
                            <button className='custom__button2'>Donate</button>
                        </div>
                    ))}
                </div>
                <span className='indicators'>
                    {data.SliderImages.map((content, index) => {
                        return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                    })}
                </span>
            </div>
        </div>
    );

}

export default Header;
