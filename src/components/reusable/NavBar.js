import React from "react";
import { 
    Link
} from "react-router-dom";

const NavBar = () => {

    const styles = {
        navbar: {
        position: "fixed",

        width: "300px",
        height: "100vh",
        background: "#DDE2E9",

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        },
        links: {
            display: "flex",
            flexDirection: "column",
        },
        homeLink: {
            textDecoration: "none",
            fontSize: "50px",
            color: "#10102C",
    
            marginBottom: "40px"
        },
        link: {
            textDecoration: "none",
            fontSize: "30px",
            color: "#3B3B50",

            marginBottom: "40px"
        }
    }

    return (
        <div style={styles.navbar}>
            <div style={styles.links}>
                <Link to="/" style={styles.homeLink}>Anton Lui</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/experience" style={styles.link}>Experience</Link>
                <Link to="/projects" style={styles.link}>Projects</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
            </div>
        </div>
    );
}

export default NavBar;