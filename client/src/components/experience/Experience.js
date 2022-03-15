import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExperience } from "../../actions/experience";

import Page from "../page/Page";
import ExperieceCard from "./ExperienceCard";
import Loader from "../page/Loader";

import styles from "./experience.module.css";
import "../styles.css";

const Experience = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperience())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const experience = useSelector((state) => state.experience);

    const displayLoading = () => {
        if (experience.length == 0) {
            return (
                <Loader />
            )
        } else {
            return null;
        }
    }

    return (
        <Page path="/">
            <div className={`${styles.heading} headerText-${theme}`}>Here are some of my recent experiences</div>
            <div className={styles.hero}>
                <div className={styles.gallery}>
                    {
                        displayLoading()
                    }
                    {
                        experience.map((experience) => {
                            return <ExperieceCard key={experience._id} details={experience} />
                        })
                    }
                </div>            
            </div>
        </Page>
    );
}

export default Experience;