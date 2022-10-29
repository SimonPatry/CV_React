import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from 'react-responsive';
import "./home.css"
//import Card from '@mui/material/Card';

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
                    `Concepteur Développeur d'Applications`,
                    1000,
                    ''
                ]}
                wrapper= "div"
                cursor={true}
                repeat={Infinity}
                style={{
                    color: "white",
                    fontSize: screenSize === "mobile" ? "6vw": screenSize === "desktop" ? "2.5vh" : "2vh",
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
            <div className={`${screenSize}Content`}>
                <div className="txt">
                    <div className={screenSize === "desktop" ? "introDesktop" : "intro"}>
                        <h1 id={screenSize === "desktop" ? "homeTitle" : ""}>Simon PATRY</h1>
                        <span style={{
                            fontWeight: "bold",
                            color: "transparent",
                            marginRight: "0.5em"}}
                        >
                            Je suis
                        </span>
                        <span><WritingAnimation /></span>
                    </div>
                    <div className="description">
                        <p style={{fontStyle: "italic"}}>
                            " Bonjour et bienvenue !
                        </p>
                        <p style={{fontStyle: "italic"}}>
                            Voici mon portfolio, n'hésitez pas à visiter, à m'envoyer un message si vous souhaitez échanger, je serais ravi de faire connaissance "
                        </p>
                        <p style={{textAlign: "right", fontStyle:"italic", color: "#A3B4C8"}}>Simon.</p>
                        <hr></hr>
                        <h2>Actualités: </h2>
                        <p>
                            Je me trouve aujourd'hui à la recherche d'une entreprise pour mon année de Concepteur développeur d'applications (bac+4), ma stack principale est React en technologie front avec du Node.js pour le backend.
                        </p>
                        <p>
                            En parallèle à cette recherche, je suis déjà en formation sur un rythme de trois semaines en entreprise et une semaine en formation. 
                        </p>
                        <p>
                        J'effectue actuellement une refonte de mon Portfolio sur mon temps libre. Vous pourrez donc, si  cela vous intéresse, suivre cette aventure ici même !
                        </p>
                    </div>
                </div>
                <div className="img-bg"></div>
                <div className="img"></div>
            </div>
        </div>
    )
}

export default Home;