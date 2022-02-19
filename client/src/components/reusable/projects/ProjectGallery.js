import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { getProjects } from "../../../actions/projects";

const ProjectGallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const projects = useSelector((state) => state.projects);

    console.log(projects);

    const style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: "200px",
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default ProjectGallery;