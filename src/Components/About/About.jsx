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
            <p>J'ai tout d'abord commencer mon chemin  de développeur en tant qu'architecte du numérique à l'école 42 pendant en 2018, puis en tant que développeur/intégrateur en mars 2021 puis développeur Fullstack octobre 2021 avec la 3W Academy dans laquelle je me trouve encore aujourd'hui pour ma formation de concepteur développeur d'applications.</p>
        </div>
    )
}

export default About;