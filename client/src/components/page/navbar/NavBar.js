import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../../actions/theme";
import { Link, useLocation } from "react-router-dom";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";


import styles from "./navbar.module.css";
import "../../styles.css";

const NavBar = () => {

    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    const onClick = () => dispatch(switchTheme(theme));

    const getIcon = () => {
        if (theme === "dark") {
            return <FaCloudSun onClick={onClick} className={styles.themeIcon}/>;
        } else {
            return <FaCloudMoon onClick={onClick} className={styles.themeIcon}/>
        }
    }

    const location = useLocation();

    const getActivePage = (path) => {
        if (location.pathname === path) {
            return "active";
        } else {
            return "inactive"
        }
    }

    return (
        <div className={`${styles.navbar} containerOpaque-${theme}`}>
            <div className={`${styles.links}`}>
                <Link to="/" className={`${styles.link} ${getActivePage("/")}-${theme}`}>home</Link>
                <Link to="/about" className={`${styles.link} ${getActivePage("/about")}-${theme}`}>about</Link>
                <Link to="/experience" className={`${styles.link} ${getActivePage("/experience")}-${theme}`}>experience</Link>
                <Link to="/projects" className={`${styles.link} ${getActivePage("/projects")}-${theme}`}>projects</Link>
                <Link to="/contact" className={`${styles.link} ${getActivePage("/contact")}-${theme}`}>contact</Link>
                {getIcon()}
                </div>
        </div>
    );
}

export default NavBar;