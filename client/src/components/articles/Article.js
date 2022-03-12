import React from "react";
import { useSelector } from "react-redux";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";

const Article = ({ details }) => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page>
            <div className={styles.banner} />
            <div className={styles.content}>
                <div className={`headerText-${theme} headerText`}>
                    {details.title}
                </div>
                <div className={styles.employer}>
                    {details.company}
                </div>
                <div className={styles.date}>
                    {details.date}
                </div>
                <div className={`${styles.divider} divider-${theme}`} />
                {
                    details.pageSummary.map((text, i) => {
                        return (
                            <div key={i} className={`subheaderText-${theme} subheaderText italics ${styles.summary}`}>{text}</div>
                        )
                    })
                }
                {
                    console.log(details.content)
                }
                {
                    details.content.map((section) => {
                        return (
                            <div className={styles.section} key={section.header}>
                                <div className={`headerText-${theme} ${styles.sectionHeader}`}>
                                    {section.header}    
                                </div>
                                <div className={`text subheaderText-${theme}`}>
                                    {section.text}    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Page>
    )
}

export default Article;