import React, {useEffect, useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from 'react-responsive';

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
                wrapper={screenSize != "desktop" ? "div" : "no"}
                cursor={true}
                repeat={Infinity}
                style={{
                    border: "2px solid black",
                    width: screenSize === "mobile" ? "45%": "",
                    height: screenSize === "mobile" ? "15vh": "",
                }}
            />
        );
    };


    return (
        <>
            <header id="head" className="header">
                <h1>Simon PATRY</h1>
                <h2>
                    <span style={{color: "#0063BF"}}>Je suis </span><WritingAnimation />
                </h2>
                <hr></hr>
            </header>
            {/* <div className={`intro`}>
                    <p>
                        Hello ! bienvenue sur ce site dans lequel on parle.. et bien de moi !
                    </p>
                    <p>
                        SI vous êtes ici, c'est que vous êtes curieux (cela nous fait déjà un point commun), aussi, laissez moi donc me présenter de manière brève.
                    </p>
                    <p>
                        Simon, 27 ans, en formation de développeur Concepteur d'Applications, jusque la, rien de nouveau pour vous.. Cependant, il n'y a pas que cela ! Je vis sur Paris depuis maintenant 4 ans pendant lesquels je me suis former en tant que développeur. Tout d'abord en tant qu'architecte du numérique à l'école 42 pendant 2 ans, puis en tant que développeur/intégrateur puis développeur Fullstack avec la 3W Academy dans laquelle je me trouve encore aujourd'hui. 
                    </p>
                </div>
                <div className={`${screenSize}Skills`}>
                    <p>test</p>
                </div>
                <div className={`${screenSize}Projects`}>
                    <p>test</p>
                </div> */}
        </>
    )
}

export default Home;