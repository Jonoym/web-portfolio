import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from "../page/Loader";
import styles from "./home.module.css";
import "../styles.css";
import Tags from "../page/tags/Tags";

const PreviewCard = ({ details, index }) => {

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

    const textOdd = () => {
        if (index % 2 == 1) {
            return styles.textAlignOdd;
        }
    }

    const containerOdd = () => {
        if (index % 2 == 1) {
            return styles.containerOdd;
        }
    }

    const imageOdd = () => {
        if (index % 2 == 1) {
            return styles.imageOdd;
        }
    }

    const tagsOdd = () => {
        return (index % 2 == 1)
    }
    
    return (
        <div data-aos="fade-up" className={styles.card}>
            <div className={styles.info}>
                <div className={`${styles.category} ${textOdd()} icon-${theme}`}>
                    {details.subheader}
                </div>
                <Link to={`/${details.tag}`} className={`${styles.cardTitle} ${containerOdd()} italics headerText-${theme} underline underline-${theme}`}>
                    {details.title}
                </Link>
                <div className={`${styles.text} cardText container offWhite cardBar-${theme} ${containerOdd()}`}>
                    <div>
                        {details.preview}    
                    </div>
                </div>
                <div className={`${styles.tags} ${containerOdd()}`}>
                    <Tags tags={details.tags} alignRight={tagsOdd()} />
                </div>
            </div>
            <Link to={`/${details.tag}`} className={styles.imageContainer} >
                <img src={details.image}
                className={`${styles.image} ${styles.image} ${imageOdd()}` }
                style={imageLoaded ? {} : { display: 'none' }}
                onLoad={() => setImageLoaded(true)} />
                {
                    displayLoader()
                }
            </Link>
        </div>
    )
}

export default PreviewCard;