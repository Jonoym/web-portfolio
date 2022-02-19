import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { getProjects } from "../../../actions/projects";

import ProjectCard from "./ProjectCard";

const ProjectGallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const projects = useSelector((state) => state.projects);

    const style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: "200px",
    }

    return (

        <div style={style}>
            {projects.map((project) => {
                return (
                    <ProjectCard details={project}/>
                );
            })}
        </div>
    );
}

export default ProjectGallery;