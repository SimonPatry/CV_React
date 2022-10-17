import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, Link,
} from "react-router-dom";
import "./sideNav.css"
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import {Button} from "@mui/material";

const SideNav = () => {
    const [state, setState] = useState({showNav : false});
    let navCoverStyle = { width: state.showNav ? "100%" : "0" }
    let sideNavStyle = { width: state.showNav ? "250px" : "0" }   

    // open/close navabar
    const handleNavClick = () => {
        setState(state.showNav ? {...state, showNav: false} : {...state, showNav: true});
    }

    return (
        <>
            <Router>

                {/* OPening navbar button */}
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

                {/* Navigation */}
                <div name="side-nav" className="side-nav" style={sideNavStyle}>
                    <a href="" onClick={handleNavClick} className="close-nav">
                    &times;
                    </a>
                    <Link onClick={handleNavClick} to="/">Accueil</Link>
                    <Link onClick={handleNavClick} to="/projects">Projets</Link>
                    <Link onClick={handleNavClick} to="/aboutMe">A propos</Link>
                    <Link onClick={handleNavClick} to="/contact">Contactez moi</Link>
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
