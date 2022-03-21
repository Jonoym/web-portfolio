import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../../actions/theme";
import { Link, useLocation } from "react-router-dom";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

import styles from "./menu.module.css";
import "../../styles.css";

const Menu = () => {

    const [menuActive, setMenuActive] = useState(false);

    const theme = useSelector((state) => state.theme);

    const onMenuClick = () => {
        setMenuActive(!menuActive);
    }

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(switchTheme(theme));
        if (theme === "dark") {
            document.documentElement.style.setProperty('--scroll-bar', "#2C2C40");
            document.documentElement.style.setProperty('--scroll-bar-background', "#EFEFEF");
        } else {
            document.documentElement.style.setProperty('--scroll-bar', "#BDADEA");
            document.documentElement.style.setProperty('--scroll-bar-background', "#0E1226");
        }
    }

    const getIcon = () => {
        if (theme === "dark") {
            return <FaCloudSun onClick={onClick} className={`${styles.themeIcon}  icon-${theme}`}/>;
        } else {
            return <FaCloudMoon onClick={onClick} className={`${styles.themeIcon}  icon-${theme}`}/>
        }
    }

    const location = useLocation();

    const getActivePage = (path) => {
        if (location.pathname === path) {
            return "linkActive";
        } else {
            return "linkInactive";
        }
    }

    const getMenuPosition = () => {
        if (menuActive) {
            return styles.slideIn;
        } else {
            return styles.slideOut;
        }
    }

    const getMenuActive = () => {
        if (menuActive) {
            return styles.active;
        } else {
            return styles.inactive;
        }
    }

    return (
        <div>
            {getIcon()}
            <div onClick={onMenuClick} className={styles.menu}>
                <div className={`${styles.bar} ${styles.barOne} menuColour-${theme}`}></div>
                <div className={`${styles.bar} ${styles.barTwo} menuColour-${theme}`}></div>
                <div className={`${styles.bar} ${styles.barThree} menuColour-${theme}`}></div>
            </div>
            <div onClick={onMenuClick} className={`${styles.cover} ${getMenuActive()}`}>

            </div>
            <div className={`${styles.links} ${getMenuPosition()} background-${theme}`}>
                <Link to="/" className={`${styles.link} ${getActivePage("/")}-${theme}`}>home</Link>
                <Link to="/about" className={`${styles.link} ${getActivePage("/about")}-${theme}`}>about</Link>
                <Link to="/experience" className={`${styles.link} ${getActivePage("/experience")}-${theme}`}>experience</Link>
                <Link to="/projects" className={`${styles.link} ${getActivePage("/projects")}-${theme}`}>projects</Link>
                <Link to="/contact" className={`${styles.link} ${getActivePage("/contact")}-${theme}`}>contact</Link>
            </div>
        </div>
    )
}

export default Menu;