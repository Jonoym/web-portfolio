import React from "react";
import { useSelector } from "react-redux";

import styles from "../article.module.css";
import "../../styles.css";

import Page from "../../page/Page";

const VR = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page>
            <div className={styles.banner} />
            <div className={styles.content}>
                <div className={`headerText-${theme} headerText`}>
                    Hello
                </div>
                <div className={`subheaderText-${theme} subheaderText italics`}>
                    Hi There, this is my project that I've been working on
                </div>
                
            </div>
        </Page>
    )
}

export default VR;