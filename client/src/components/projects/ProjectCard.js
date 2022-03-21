import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./projects.module.css";
import "../styles.css";

import Loader from "../page/Loader";
import Tags from "../page/tags/Tags";

const ProjectCard = ({ details }) => {

    AOS.init({
        duration: 700,
        once: true
    });

    const [imageLoaded, setImageLoaded] = useState(false);

    const theme = useSelector((state) => state.theme);

    const displayLoader = () => {
        if (!imageLoaded) {
            return (
                <Loader />
            )
        }
    }

    const displayRepo = () => {
        if (details.repo) {
            return (
                <a href={details.repo} target="_blank" className={`${styles.sourceCode} repoLink-${theme}`}>
                    <FaGithub className={`${styles.icon} ${theme}`}/>
                </a>
            )
        }
    }

    return (
        <div data-aos="fade-up" className={styles.card}>
            <div className={`cardBar-${theme}`}>
                <Link to={`/${details.tag}`}>
                    <img src={details.image} className={`${styles.image}`} style={imageLoaded ? {} : { display: 'none' }} onLoad={() => setImageLoaded(true)} />
                    {
                        displayLoader()
                    }
                </Link>

                <div className={`${styles.information}`}>
                    <div className={`${styles.cardHeader}`}>
                        <Link to={`/${details.tag}`} className={`${styles.projectName} italics headerText-${theme} underline underline-${theme}`}>
                            {details.title}
                        </Link>
                        {
                            displayRepo()
                        }
                    </div>
                    <div className={`${styles.date} text subheaderText-${theme}`}>
                        <FaCalendarAlt className={`${styles.smallIcon} icon-${theme}`}/>
                        {details.date}
                    </div>
                </div>
                <Tags tags={details.tags} />
                <div className={`${styles.summary} cardText subheaderText-${theme}`}>
                    {details.summary}                
                </div>
            </div>

        </div>
    );
}

export default ProjectCard;