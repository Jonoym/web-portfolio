import React from "react";
import { useSelector } from "react-redux";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";

import styles from "./projects.module.css";
import "../styles.css";
import Tags from "../page/tags/Tags";

const ProjectCard = ({ details }) => {

    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.card} cardBar-${theme}`}>
            <div className={styles.imageContainer} >
                <div className={`${styles.image}`} />
                <div className={`${styles.imageBorder}`} />
            </div>
            <div className={`${styles.information}`}>
                <div className={`${styles.projectName} italics headerText-${theme} underline underline-${theme}`}>
                    {details.project}
                </div>
                <div className={`${styles.date} text subheaderText-${theme}`}>
                    <FaCalendarAlt className={`${styles.smallIcon} icon-${theme}`}/>
                    {details.date}
                </div>
            </div>
            <Tags tags={details.tags} />
            <div className={`${styles.summary} text subheaderText-${theme}`}>
                {details.summary}                
            </div>
        </div>
    );
}

export default ProjectCard;