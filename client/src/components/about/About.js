import React from "react";
import { useSelector } from "react-redux";

import Page from "../page/Page";

import styles from "./about.module.css";
import "../styles.css";

const About = () => {

    const theme = useSelector((state) => {
        return state.theme
    });

    return (
        <Page path="/about">
            <div className={styles.hero}>
                <div className={`subheaderText subheaderText-${theme}`}>Things to know</div>
                <div className={`headerText headerText-${theme}`}>About Me!</div>
            </div>
        </Page>
    );
}

export default About;