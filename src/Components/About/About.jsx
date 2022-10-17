import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import "./about.css";

const About = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    return(
        <div className={`${screenSize} container`}>
            <h1>A propos..</h1>
        </div>
    )
}

export default About;