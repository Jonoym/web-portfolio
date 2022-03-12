import React from "react";
import { useSelector } from "react-redux";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";

const Article = ({ details, type }) => {

    const theme = useSelector((state) => state.theme);

    const getLocation = () => {
        if (type == "experience") {
            return (
                <div className={`${styles.location} text subheaderText-${theme}`}>
                    <FaMapMarkedAlt className={`${styles.smallIcon} icon-${theme}`}/>
                    {details.location}
                </div>
            )
        }
    }

    return (
        <Page>
            <div className={styles.banner} />
            <div className={styles.content}>
                <div className={`headerText-${theme} headerText`}>
                    {details.title}
                </div>
                <div className={`${styles.employer} text subheaderText-${theme}`}>
                    {details.company}
                </div>
                <div className={`${styles.date} text subheaderText-${theme}`}>
                    <FaCalendarAlt className={`${styles.smallIcon} icon-${theme}`}/>
                    {details.date}
                </div>
                {
                    getLocation()
                }
                <div className={`${styles.divider} divider-${theme}`} />
                {
                    details.pageSummary.map((text, i) => {
                        return (
                            <div key={i} className={`subheaderText-${theme} subheaderText italics ${styles.summary}`}>{text}</div>
                        )
                    })
                }
                <div className={`${styles.divider} divider-${theme}`} />
                {
                    details.content.map((section) => {
                        return (
                            <div className={styles.section} key={section.header}>
                                <div className={`headerText-${theme} ${styles.sectionHeader}`}>
                                    {section.header}    
                                </div>
                                <div className={`text subheaderText-${theme} ${styles.articleText}`}>
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