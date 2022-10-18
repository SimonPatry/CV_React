import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import "./carousel.css";
import { TypeAnimation } from 'react-type-animation';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// import others pages
import Contact from "../Contact/Contact";
import Home from "../Home/Home"

const Carousel = () => {

    // responsive
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    

    // Carousel items

    const items  =  [
        < Home/>,
        < Contact />,
    ];

    // Render
    return(
        <div className={`${screenSize} container`}>
            
            <div className="carousel">
                <AliceCarousel mouseTracking items={items} />
            </div>
        </div>
    )
}

export default Carousel;