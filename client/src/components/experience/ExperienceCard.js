import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./experience.module.css";
import "../styles.css";
import Tags from "../page/tags/Tags";
import Loader from "../page/Loader";
import Cow from "../../images/Cow.png";

const Experience = ({ details }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const theme = useSelector((state) => state.theme);

    const displayLoader = () => {
        if (!imageLoaded) {
            return (
                <Loader />
            )
        }
    }

    return (
        <div className={`${styles.card} cardBar-${theme}`}>
            <div className={styles.cardText}>
                <div className={`${styles.leftCard}`}>                
                    <div className={`${styles.information}`}>
                        <Link to={`/${details.tag}`} className={`${styles.role} italics headerText-${theme} underline underline-${theme}`}>
                            {details.role}
                        </Link>
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
                    <div className={`${styles.summary} cardText subheaderText-${theme}`}>
                        {details.summary}                
                    </div>
                </div>
            </div>
            <Link to={`/${details.tag}`}className={styles.imageContainer} >
                <img src={details.image} className={`${styles.image}`} style={imageLoaded ? {} : { display: 'none' }} onLoad={() => setImageLoaded(true)} />
                {
                    displayLoader()
                }
            </Link>
        </div>
    );
}

export default Experience;