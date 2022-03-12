import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExperience } from "../../actions/experience";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";
import Article from "./Article";

const VR = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperience())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const experience = useSelector((state) => state.experience);

    const getLoadingPage = () => {
        if (experience.length == 0) {
            return (
                <Page>
                    <div className="ripple-loader">
                        <div></div>
                        <div></div>
                    </div>
                </Page>
            )
        }
    }

    return (
        <>
            {
                getLoadingPage()
            }
            {
                experience.map((experience) => {
                    if (experience.tag == "vr") {
                        return (
                            <Article key={experience._id} details={experience} type="experience"/>
                        )
                    }
                })
            }
        </>
    )
}

export default VR;