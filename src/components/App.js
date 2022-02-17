import React from "react";
import { 
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/About";
import Projects from "./pages/About";
import Contact from "./pages/About";

const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} /> 
                <Route path="/experience" element={<Experience />} /> 
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/contact" element={<Contact />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;