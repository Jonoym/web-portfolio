import React from "react";
import { useSelector } from "react-redux";

import Page from "../page/Page";


import styles from "./home.module.css";
import "../styles.css";

const Home = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page path="/">
            <div className={styles.hero}>
                <div className={`subheaderText subheaderText-${theme} italics`}>Hey!</div>
                <div className={`headerText headerText-${theme}`}>I'm Jonathan</div>
                <div className={`subheaderText subheaderText-${theme} italics`}>I'm in my Penultimate Year of Software Engineering</div>
            </div>
        </Page>
    );
}

export default Home;