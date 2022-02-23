import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { getExperience } from "../../actions/experience";

import ExperienceCard from "./ExperienceCard";

const ExperienceGallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperience())
    }, [dispatch])

    const experience = useSelector((state) => state.experience)

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "200px",
    }

    const displayLoading = () => {
        if (experience.length == 0) {
            return (
                <div class="ripple-loader">
                    <div></div>
                    <div></div>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <div style={style}>
            {
                displayLoading()
            }
            {experience.map((experience) => {
                return <ExperienceCard key={experience._id} details={experience} />
            })}
        </div>
    );
}

export default ExperienceGallery;