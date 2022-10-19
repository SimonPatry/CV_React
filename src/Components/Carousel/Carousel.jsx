import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

// import others pages
import Contact from "../Contact/Contact";
import About from "../About/About"
import Home from "../Home/Home"

const Carousel = () => {

    // responsive
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    

    // Carousel items

    const items  =  [
        < Home />,
        < About /> ,
        < Contact />,
    ];

    // Render
    return(
        <div className={`${screenSize} container`}>
            <div className="carousel">
                <div className={`${screenSize} container`}>
                    <div className="carousel">
                        <AliceCarousel
                            renderPrevButton={() => {
                                return <FontAwesomeIcon style={{color: "white", fontSize: "2vw", rotate: "180deg"}} icon={faArrowRightToBracket} />
                            }}
                            renderNextButton={() => {
                                return <FontAwesomeIcon style={{color:"white", fontSize: "2vw"}} icon={faArrowRightToBracket} />
                            }}
                            items={items}
                            disableDotsControls = {true}
                            disableSlideInfo = {true}
                            disableButtonsControls = {screenSize === "desktop" ? false : true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;