import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import "./home.css";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    const WritingAnimation = () => {
        return (
            <TypeAnimation
                sequence={[
                    'Concepteur',
                    1000,
                    'Développeur',
                    1000,
                    'Concepteur\nDéveloppeur\nd\'Applications',
                    1000,
                    ''
                ]}
                wrapper={screenSize != "desktop" ? "div" : "no"}
                cursor={true}
                repeat={Infinity}
            />
        );
    };

    return(
        <div className={`${screenSize} container`}>
            <header className="header">
                <h1>Simon PATRY</h1>
                <h2>
                    <span style={{color: "#0063BF"}}>Je suis </span><WritingAnimation />
                </h2>
            </header>
            <div className={`${screenSize}Intro`}>

            </div>
            <div className={`${screenSize}Skills`}>

            </div>
            <div className={`${screenSize}Projects`}>

            </div>
            
        </div>
    )
}

export default Home;