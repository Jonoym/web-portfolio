import React from "react";
import { useSelector } from "react-redux";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";

import styles from "./experience.module.css";
import "../styles.css";
import Tags from "../page/tags/Tags";

const Experience = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.card} cardBar-${theme}`}>
            <div className={`${styles.leftCard}`}>                
                <div className={`${styles.information}`}>
                    <div className={`${styles.role} italics headerText-${theme} underline underline-${theme}`}>
                        Summer Research Student
                    </div>
                    <div className={`${styles.employer} text subheaderText-${theme}`}>
                        University of Auckland
                    </div>
                    <div className={`${styles.date} text subheaderText-${theme}`}>
                        <FaCalendarAlt className={`${styles.smallIcon} icon-${theme}`}/>
                        Dec 2021 - Feb 2022
                    </div>
                    <div className={`${styles.location} text subheaderText-${theme}`}>
                        <FaMapMarkedAlt className={`${styles.smallIcon} icon-${theme}`}/>
                        Auckland, NZ
                    </div>
                </div>
                <Tags></Tags>
            </div>
            <div className={`${styles.middleCard}`}>
                <div className={`${styles.summary} text subheaderText-${theme}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed aliquet turpis, et auctor turpis. Nam nulla quam, elementum ut consectetur eget, accumsan nec enim. In eu pharetra nulla, et consectetur lacus. Sed luctus nec nisl ac maximus. Fusce blandit tortor arcu, at auctor dolor auctor quis. Vivamus quis tristique odio. Nam erat diam, sagittis id tellus vel, elementum dignissim sem.
                </div>
            </div>
            <div className={`${styles.image}`}>

            </div>
        </div>
    );
}

export default Experience;