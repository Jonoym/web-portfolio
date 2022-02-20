import React from "react";
import { 
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Create from "./pages/Create";
import Error from "./pages/Error";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> 
                <Route path="experience" element={<Experience />} /> 
                <Route path="projects" element={<Projects />} /> 
                <Route path="contact" element={<Contact />} /> 
                <Route path="create" element={<Create />} /> 
                <Route path="*" element={<Error />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;