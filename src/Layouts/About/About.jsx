import React from "react";
import { useMediaQuery } from 'react-responsive';
import Skillbar from 'react-skillbars';
//import customCard from "../../Components/CustomCard/CustomCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Card } from "@mui/material";

import "./about.css";

const About = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    const skills = [
        {type: "React", level: 75},
        {type: "Node", level: 80},
        {type: "Js", level: 95},
        {type: "HTML", level: 95},
        {type: "CSS", level: 95},
        {type: "MySQL", level: 70},
        {type: "PHP", level: 60},
    ];

    const colors = {
        bar: '#b5ff00',
        title: {
          text: 'white',
          background: '#333333'
        }
    }

    return(
        <div className={`container`}>
            <div className="about">
                <div className="informations">
                    <h1>INFORMATIONS</h1>
                        <ul>
                            <li><FontAwesomeIcon icon={faUser} /> Simon PATRY</li>
                            <li><FontAwesomeIcon icon={faPhone} /> 06 65 72 43 16</li>
                            <li><FontAwesomeIcon icon={faPaperPlane} /> simonpatry12@gmail.com</li>
                            <li><a href="https://github.com/SimonPatry" target="_blank"><FontAwesomeIcon icon={faCode} /> https://github.com/SimonPatry</a></li>
                        </ul>
                    <a id="cvBtn" href="/assets/CV_Simon_PATRY.pdf" download><FontAwesomeIcon icon={faDownload} />CV</a>
                </div>
                <div className="introduction">
                    <h1>MON PARCOURS</h1>
                    <p>J'ai tout d'abord commencer mon chemin  de développeur en tant qu'architecte du numérique à l'école 42 pendant en 2018, puis en tant que développeur/intégrateur en mars 2021 puis développeur Fullstack octobre 2021 avec la 3W Academy dans laquelle je me trouve encore aujourd'hui pour ma formation de concepteur développeur d'applications.</p>
                </div>
                <div className="skills">
                    <h1>SKILLS</h1>
                    {/* <customCard
                        title="MES COMPETENCES"
                        content={<Skillbar skills={skills} colors={colors} height={'5vh'}/>}
                    /> */}
                    <Skillbar   id="skills" skills={skills} colors={colors} height={'3vh'} />
                </div>
                <div className="interests">
                <div className="aboutWheelCenter">
                    <div className="aboutWheelExt">
                        <img id="circle1" src="img/coffee_story.png" alt="CoffeeStory" />
                    </div>
                        <img id="circle2" src="/img/compiling_coffee.gif" alt="compilingCoffee" />
                    </div>
                </div>
            </div>
            <div id="about-bg"></div>
            <div id="about-bg-cover"></div>
        </div>
    )
}

export default About;