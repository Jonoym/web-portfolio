import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExperience } from "../actions/experience";
import { getProjects } from "../actions/projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";
import Home from "./home/Home";
import About from "./about/About";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import VR from "./articles/VR";
import Aubot from "./articles/Aubot";
import Nujim from "./articles/Nujim";
import Junstris from "./articles/Junstris";
import WebPortfolio from "./articles/WebPortfolio";
// import Create from "./create/Create";
import Error from "./error/Error";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getExperience())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    return (
        <BrowserRouter className={`scrollbar-${theme}`}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> 
                <Route path="experience" element={<Experience />} /> 
                <Route path="projects" element={<Projects />} /> 
                <Route path="contact" element={<Contact />} /> 
                <Route path="vr" element={<VR />} /> 
                <Route path="aubot" element={<Aubot />} /> 
                <Route path="nujim" element={<Nujim />} /> 
                <Route path="junstris" element={<Junstris />} /> 
                <Route path="web-portfolio" element={<WebPortfolio />} /> 
                {/* {
                    experience.map((experience) => {
                        return (
                            <Route path={`${experience.tag}`} key={experience._id} element={<VR />}/>
                        )
                    })
                }
                {
                    projects.map((project) => {
                        return (
                            <Route path={`/${project.tag}`} key={project._id} element={<VR />}/>
                        )
                    })
                } */}
                <Route path="*" element={<Error />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;