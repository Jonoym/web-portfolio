import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";
import { getExperience } from "../../actions/experience";

import Page from "../page/Page";
import PreviewCard from "./PreviewCard";

import styles from "./home.module.css";
import "../styles.css";

const Home = () => {

    var index = 0;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getExperience())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const experience = useSelector((state) => state.experience).slice(0, 1);

    const projects = useSelector((state) => state.projects).slice(0, 2);

    return (
        <Page path="/">
            <div className={styles.hero}>
                <div className={`subheaderText subheaderText-${theme} italics`}>Hey!</div>
                <div className={`headerText headerText-${theme}`}>I'm Jonathan</div>
                <div className={`subheaderText subheaderText-${theme} italics`}>I'm in my Penultimate Year of Software Engineering</div>
            </div>
            <div className={`${styles.previews}`}>
                {
                    experience.map((experience) => {
                        return <PreviewCard key={experience._id} details={experience} index={index++}/>
                    })
                }
                {
                    projects.map((project) => {
                        return <PreviewCard key={project._id} details={project} index={index++}/>
                    })
                }
            </div>
        </Page>
    );
}

export default Home;