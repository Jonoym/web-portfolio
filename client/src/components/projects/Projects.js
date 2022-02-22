import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";

import Page from "../page/Page";

import styles from "./projects.module.css";
import "../styles.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const projects = useSelector((state) => state.projects);

    return (
        <Page path="/">
            <div className={`${styles.heading} headerText-${theme}`}>Here are some of the projects I’ve worked on in my spare time</div>
            <div className={styles.hero}>                
                <div className={`${styles.gallery}`}>
                    {
                        projects.map((project) => {
                            return <ProjectCard key={project._id} details={project} />
                        })
                    }
                </div>
            </div>
        </Page>
    );
}

export default Projects;