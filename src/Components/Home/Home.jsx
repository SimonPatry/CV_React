import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import "./home.css";

const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    return(
        <div className={screenSize}>
            <h1>Home</h1>
        </div>
    )
}

export default Home;