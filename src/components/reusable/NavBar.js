import React from "react";
import { 
    Link
} from "react-router-dom";

const NavBar = () => {

    const styles = {
        navbarBox: {
            position: "relative",
            width: "300px",
            height: "100vh",
            zIndex: "0"
        },
        navbar: {
            position: "fixed",

            width: "300px",
            height: "100vh",
            background: "#DDE2E9",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1"
        },
        links: {
            display: "flex",
            flexDirection: "column",
        },
        homeLink: {
            textDecoration: "none",
            fontSize: "50px",
            fontWeight: "bold",
            color: "#10102C",
        },
        link: {
            textDecoration: "none",
            fontSize: "30px",
            color: "#3B3B50",

            marginTop: "40px"
        }
    }

    return (
        <div>
            <div style={styles.navbar}>
                <div style={styles.links}>
                    <Link to="/" style={styles.homeLink}>Anton Lui</Link>
                    <Link to="/about" style={styles.link}>About</Link>
                    <Link to="/experience" style={styles.link}>Experience</Link>
                    <Link to="/projects" style={styles.link}>Projects</Link>
                    <Link to="/contact" style={styles.link}>Contact</Link>
                </div>
            </div>
            <div style={styles.navbarBox}>

            </div>
        </div>
    );
}

export default NavBar;