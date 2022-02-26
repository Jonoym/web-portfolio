import React from "react";
import { useSelector } from "react-redux";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";

import styles from "./experience.module.css";
import "../styles.css";
import Tags from "../page/tags/Tags";

const Experience = ({ details }) => {

    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.card} cardBar-${theme}`}>
            <div className={styles.cardText}>
                <div className={`${styles.leftCard}`}>                
                    <div className={`${styles.information}`}>
                        <div className={`${styles.role} italics headerText-${theme} underline underline-${theme}`}>
                            {details.role}
                        </div>
                        <div className={`${styles.employer} text subheaderText-${theme}`}>
                            {details.company}
                        </div>
                        <div className={`${styles.date} text subheaderText-${theme}`}>
                            <FaCalendarAlt className={`${styles.smallIcon} icon-${theme}`}/>
                            {details.date}
                        </div>
                        <div className={`${styles.location} text subheaderText-${theme}`}>
                            <FaMapMarkedAlt className={`${styles.smallIcon} icon-${theme}`}/>
                            {details.location}
                        </div>
                    </div>
                    <Tags tags={details.tags} />
                </div>
                <div className={`${styles.middleCard}`}>
                    <div className={`${styles.summary} text subheaderText-${theme}`}>
                        {details.text}                
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer} >
                <div className={`${styles.image}`} />
                <div className={`${styles.imageBorder}`} />
            </div>
        </div>
    );
}

export default Experience;