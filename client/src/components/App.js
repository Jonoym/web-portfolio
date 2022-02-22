import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";
import Home from "./home/Home";
import About from "./about/About";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
// import Contact from "./contact/Contact";
// import Create from "./create/Create";
// import Error from "./error/Error";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="about" element={<About />} /> 
                <Route path="experience" element={<Experience />} /> 
                <Route path="projects" element={<Projects />} /> 
                {/* <Route path="contact" element={<Contact />} /> 
                <Route path="create" element={<Create />} /> 
                <Route path="*" element={<Error />} />  */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;