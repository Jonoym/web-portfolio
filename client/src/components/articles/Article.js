import React from "react";
import { useSelector } from "react-redux";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";

const Article = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page>
            <div className={styles.banner} />
            <div className={styles.content}>
                <div className={`headerText-${theme} headerText`}>
                    Spatial VR Game
                </div>
                <div className={styles.employer}>
                    University of Auckland
                </div>
                <div className={styles.date}>
                    December 2021 - February 2022
                </div>
                <div className={styles.tools}>
                    December 2021 - February 2022
                </div>
                <div className={`${styles.divider} divider-${theme}`}>

                </div>
                <div className={`subheaderText-${theme} subheaderText italics`}>
                    This was a Summer Research Scholarship Program at the University of Auckland. The aim was to create a game that was capable of training multiple types of spatial skills in a fun and interactive VR environment.   
                </div>
                <br />
                <div className={`subheaderText-${theme} subheaderText italics`}>
                    I was given the opportunity to perform literature reviews, design and develop prototypes, carry out user testing and report my findings. 
                </div>
                <br />
                <div className={`headerText-${theme} ${styles.sectionHeader}`}>
                    My Experience    
                </div>
                <div className={`text subheaderText-${theme}`}>
                    This project allowed me to get a feel for game development and introduced me to the world of Virtual Reality. 
                </div>
            </div>
        </Page>
    )
}

export default Article;