import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./linksbar.module.css";
import "../../styles.css";

const LinksBar = () => {
    
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.linksbar} containerOpaque-${theme}`}>
            <div className={`${styles.links}`}>
                <a href="https://github.com/jonoym" target="_blank"><FaGithub className={`${styles.icon} ${theme}`}/></a>
                <a href="https://www.linkedin.com/in/jonathanymtang" target="_blank"><FaLinkedin className={styles.icon}/></a>
                <Link to="/contact"><FaEnvelope className={styles.icon}/></Link>
            </div>
        </div>
    );
}

export default LinksBar;