import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./projects.css";

const Projects = () => {
    
    // responsive
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    
    // projects

    const projects = [
        {
            name: "Portfolio",
            description: "Ce site est actif sur le lien ce dessous, il s'agit de mon projet de fin de formation de développeur intégrateur dont les contraintes étaient les suivantes: langage natifs obligatoires dont html, css javascript, php, mysql - un backoffice, une architecture MVC, un projet responsive.",
            img:[

            ],
            link: "https://simonpatry.fr",
            video: "",
            date: "07/21",
        },
        {
            name: "VignUp",
            description: "Projet de hackaton dont l'objectif était de créer un site permettant aux viticulture d'étudier une potentiel transition dans le format de leurs vignes. Il s'agit donc d'un outil d'analyse.",
            img:[

            ],
            link: "",
            video: "",
            date: "05/22",
        },
        {
            name: "Doom-nukem",
            description: "Projet de fin de rban,che à l'école 42 (ancien cursus pédagogique). Il s'agit d'un projet de création d'un jeu/éditeur de jeu créé from srcatch (moteur de rendu inclus)",
            img:[

            ],
            link: "",
            video: "",
            date: "08/2020",
        }
    ];

    return(
        <div className={`${screenSize} container`}>
            <div className="projects">
                <h1>Mes projets</h1>
                {projects.map((project) => {
                    return (
                        <div className="project-block">
                            <p>{project.name}</p>
                            <p style={{fontStyle: "italic"}} >{project.date}</p>
                            <p>{project.description}</p>
                            <a style={{textDecoration: "none", color: "white"}} >{project.link}</a>
                            <embed type="video/webm" src={project.video} width="400" height="300" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;