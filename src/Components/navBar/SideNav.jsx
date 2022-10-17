import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, Link,
} from "react-router-dom";
import "./sideNav.css";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import {Button} from "@mui/material";
import { useMediaQuery } from 'react-responsive';

const SideNav = () => {
    const [state, setState] = useState({showNav : false});
    let navCoverStyle = { width: state.showNav ? "100%" : "0" }
    let sideNavStyle = { width: state.showNav ? "250px" : "0" }   
    
    // Handle navbar for responsive
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    useEffect(() => {
        if(screenSize === "desktop")
            setState({...state, showNav: true});
    },[screenSize])

    // open/close navabar
    const handleNavClick = (e = null) => {
        if (e)
            e.preventDefault();
        setState(state.showNav ? {...state, showNav: false} : {...state, showNav: true});
    }

    return (
        <>
            <Router>

                {screenSize !== "desktop" && 
                    <>
                    {/* Opening navbar button */}
                        <Button onClick={(e) => {
                                e.preventDefault();
                                handleNavClick();
                            }}
                            className="open-nav"
                        >
                            &#9776;
                        </Button>
                    
                    {/* Covering th e screen with a div beneath the navbar to control opening */}
                        <div
                            onClick={handleNavClick}
                            className="nav-cover"
                            style={navCoverStyle}
                        />
                    </>
                }

                

                {/* Navigation */}
                <div name="side-nav" className="side-nav" style={sideNavStyle}>
                    {screenSize !== "desktop" && 
                        <a href="javascript:;" onClick={handleNavClick} 
                            className="close-nav"
                        >
                            &times;
                        </a>
                    }
                    <Link to="/">Accueil</Link>
                    <Link to="/projects">Projets</Link>
                    <Link to="/aboutMe">A propos</Link>
                    <Link to="/contact">Contactez moi</Link>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={< Home />}/>
                        <Route exact path="/projects" element={< Projects />}/>
                        <Route exact path="/aboutMe" element={< About />}/>
                        <Route exact path="/contact" element={< Contact />}/>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default SideNav
