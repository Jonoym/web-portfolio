import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExperience } from "../../../actions/experience";

import styles from "../article.module.css";
import "../../styles.css";

import Article from "../Article";

const VR = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperience())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const experience = useSelector((state) => state.experience);

    const displayLoading = () => {
        if (experience.length == 0) {
            return (
                <div className="ripple-loader">
                    <div></div>
                    <div></div>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <>
            {displayLoading()}
            {
                experience.map((experience) => {
                    if (experience.tag == "vr") {
                        return (
                            <Article key={experience._id} details={experience}/>
                        )
                    }
                })
            }
        </>
    )
}

export default VR;