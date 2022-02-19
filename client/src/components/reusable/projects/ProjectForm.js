import React, { useState } from "react";
import RoundedButton from "../button/RoundedButton";

import Input from "../input/Input";
import TextArea from "../input/TextArea";
import { FaPaperPlane } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { createProject } from "../../../actions/projects";

const ProjectForm = () => {

    const [projectData, setProjectData] = useState({
        creator: "",
        title: "",
        text: "",
        tags: "",
        summary: "",
    });

    const dispatch = useDispatch();

    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "end"
        },
        icon: {
            fontSize: "30px",
            color: "#464BC8"
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(projectData);
        dispatch(createProject(projectData))
    }

    return (
        <form style={styles.form}>
            <Input name="creator" label="Creator" value={projectData} onChange={(e) => setProjectData({ ...projectData, creator: e.target.value })}/>
            <Input name="title" label="Title" value={projectData} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}/>
            <Input name="date" label="Date" value={projectData} onChange={(e) => setProjectData({ ...projectData, date: e.target.value })}/>
            <Input name="tags" label="Tags" value={projectData} onChange={(e) => setProjectData({ ...projectData, tags: e.target.value })}/>
            <TextArea name="text" label="Text" value={projectData} onChange={(e) => setProjectData({ ...projectData, text: e.target.value })} height="200px"></TextArea>
            <RoundedButton onClick={onSubmit} ><FaPaperPlane style={styles.icon}/></RoundedButton>
        </form>
    );
}

export default ProjectForm;