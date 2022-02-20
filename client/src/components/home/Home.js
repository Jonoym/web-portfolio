import React from "react";
import { useSelector } from "react-redux";

import Page from "../page/Page";

import styles from "./home.module.css";
import "../styles.css";

const Home = () => {

    const theme = useSelector((state) => {
        return state.theme
    });

    return (
        <Page path="/">
            <div className={styles.hero}>
                <div className={`subheaderText subheaderText-${theme}`}>Hey!</div>
                <div className={`headerText headerText-${theme}`}>I'm Jonathan</div>
                <div className={`subheaderText subheaderText-${theme}`}>I'm in my Penultimate Year</div>
                <div className={`subheaderText subheaderText-${theme}`}>of Software Engineering</div>
            </div>
        </Page>
    );
}

export default Home;