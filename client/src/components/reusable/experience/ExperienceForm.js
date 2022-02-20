import React, { useState } from "react";
import RoundedButton from "../button/RoundedButton";

import Input from "../input/Input";
import TextArea from "../input/TextArea";
import { FaPenAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { createExperience } from "../../../actions/experience";

const ExperienceForm = () => {

    const [experienceData, setExperienceData] = useState({
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

        console.log(experienceData);
        dispatch(createExperience(experienceData))
    }

    return (
        <form style={styles.form}>
            <Input name="role" label="Role" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, role: e.target.value })}/>
            <Input name="employer" label="Employer" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, employer: e.target.value })}/>
            <Input name="date" label="Date" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, date: e.target.value })}/>
            <Input name="location" label="Location" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, location: e.target.value })}/>
            <Input name="tags" label="Tags" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, tags: e.target.value })}/>
            <TextArea name="text" label="Text" value={experienceData} onChange={(e) => setExperienceData({ ...experienceData, text: e.target.value })} height="200px"></TextArea>
            <RoundedButton onClick={onSubmit} ><FaPenAlt style={styles.icon}/></RoundedButton>
        </form>
    );
}

export default ExperienceForm;