import React, {useEffect, useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from 'react-responsive';
import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    // responsive
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    // typeing animation
    const WritingAnimation = () => {
        return (
            <TypeAnimation
                sequence={[
                    'Concepteur',
                    1000,
                    'Développeur',
                    1000,
                    `Concepteur Développeur d\'Applications`,
                    1000,
                    ''
                ]}
                wrapper= "div"
                cursor={true}
                repeat={Infinity}
                style={{
                    color: "white",
                    fontSize: "3.5vh",
                    lineHeight: "6vh",
                    width: screenSize === "mobile" ? "45%": "",
                    height: screenSize === "mobile" ? "15vh": "",
                }}
            />
        );
    };


    return (
        <div className="container">
            { screenSize === "desktop" &&
                <div>
                    <div className="bg-wrapper"></div>
                    <div className="bg-border"></div>
                </div>
            }
            <div className="content">
                <h1>Simon PATRY</h1>
                <span style={{fontWeight: "bold", color: "transparent", marginRight: "0.5em"}}>Je suis</span>
                <span><WritingAnimation /></span>
                <p>
                    Bonjour et bienvenu ! vous êtes ici sur mon Portfolio, jusque la, rien de nouveau pour vous.. Je suis en alternance. Tout d'abord en tant qu'architecte du numérique à l'école 42 pendant 2 ans, puis en tant que développeur/intégrateur puis développeur Fullstack avec la 3W Academy dans laquelle je me trouve encore aujourd'hui.
                </p>
            </div>
        </div>
    )
}

export default Home;