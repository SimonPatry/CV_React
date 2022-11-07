import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import "./projects.css";
import 'react-alice-carousel/lib/alice-carousel.css';

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
            style: "project-hover project-hover-effect",
            styleEffect: false,
        },
        {
            name: "VignUp",
            description: "Projet de hackaton dont l'objectif était de créer un site permettant aux viticulture d'étudier une potentiel transition dans le format de leurs vignes. Il s'agit donc d'un outil d'analyse.",
            img:[

            ],
            link: "",
            video: "",
            date: "05/22",
            style: "project-hover project-hover-effect",
            styleEffect: false,
        },
        {
            name: "Doom-nukem",
            description: "Projet de fin de rban,che à l'école 42 (ancien cursus pédagogique). Il s'agit d'un projet de création d'un jeu/éditeur de jeu créé from srcatch (moteur de rendu inclus)",
            img:[

            ],
            link: "",
            video: "",
            date: "08/2020",
            style: "project-hover project-hover-effect",
            styleEffect: false,
        }
    ];

    const [port, setPort] = useState(false);
    const [vign, setVign] = useState(false);
    const [doom, setDoom] = useState(false);

    
    const handleKeyPress = (key) => {
        if (key === 0){
            port ? setPort(false): setPort(true);
            port && setTimeout(() => {
                setPort("hide");
                console.log("hide");
            }, 2000);
        } else if (key === 1) {
            vign ? setVign(false): setVign(true);
        } else if (key ===2) {
            doom ? setDoom(false): setDoom(true);
        }
    }

    return(
        <div className={`${screenSize} container`}>
            <div className="projects">
                <h1>Mes projets</h1>
                <p>Page en cours de création...</p>
                {projects.map((project, key) => {
                    return (
                        <div className="project">
                            <div className={`project-hover ${key === 0 && port ? "project-hover-effect" : key === 1 && vign ? "project-hover-effect" : key === 2 && doom ? "project-hover-effect" : ""}`}
                                onClick={(e) =>{
                                    e.preventDefault();
                                    handleKeyPress(key);
                                }}
                            >
                                <p>{project.name}</p>
                                {project.img.length > 0 && <img src={project.img} alt={project.name} />}
                            </div>
                            <div className="project-card" onClick={(e) => {
                                
                                project.styleEffect = false;
                            }}>
                                <p>{project.name}</p>
                                <p style={{fonteffect: "italic"}} >{project.date}</p>
                                <p>{project.description}</p>
                                <a style={{textDecoration: "none", color: "white"}} href={project.link}>{project.link}</a>
                                <embed type="video/webm" src={project.video} width="400" height="300" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;