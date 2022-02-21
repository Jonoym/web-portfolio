import React from "react";
import { useSelector } from "react-redux";

import Page from "../page/Page";
import ExperieceCard from "./ExperieceCard";

import styles from "./experience.module.css";
import "../styles.css";

const Experience = () => {

    const theme = useSelector((state) => {
        return state.theme
    });

    return (
        <Page path="/">
            <div className={styles.hero}>                
                <div className={`${styles.heading} headerText-${theme}`}>Here are some things that I have had the opportunity to experience</div>
                <div className={`${styles.gallery}`}>
                    <ExperieceCard />
                    <ExperieceCard />
                    <ExperieceCard />
                </div>
            </div>
        </Page>
    );
}

export default Experience;