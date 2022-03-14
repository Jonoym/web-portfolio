import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Page from "../page/Page";

import styles from "./error.module.css";
import "../styles.css";

const Error = () => {


    const theme = useSelector((state) => state.theme);

    return (
        <Page to="">
            <div className={styles.hero}>
                <div className={`subheaderText subheaderText-${theme} italics ${styles.errorMessage}`}>Hey! You're not suppose to be here</div>
                <div className={`subheaderText subheaderText-${theme} italics ${styles.errorMessage}`}>Hmmm, maybe I broke something</div>

                <div className={`subheaderText subheaderText-${theme} italics ${styles.errorMessage}`}>Anyways, let's get you back on track</div>
                <div className={`subheaderText headerText-${theme} italics ${styles.errorMessage} ${styles.bigMessage}`}>Where would you like to visit?</div>
                <div className={styles.links}>
                    <Link to="/" className={`${styles.link} subheaderText italics input-${theme}`}>home</Link>
                    <Link to="/about" className={`${styles.link} subheaderText italics input-${theme}`}>about</Link>
                    <Link to="/experience" className={`${styles.link} subheaderText italics input-${theme}`}>experience</Link>
                    <Link to="/projects" className={`${styles.link} subheaderText italics input-${theme}`}>projects</Link>
                    <Link to="/contact" className={`${styles.link} subheaderText italics input-${theme}`}>contact</Link>
                </div>
            </div>
        </Page>
    );
}

export default Error;