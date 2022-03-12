import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";
import Article from "./Article";

const Nujim = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const projects = useSelector((state) => state.projects);

    const displayLoading = () => {
        if (projects.length == 0) {
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

    const getLoadingPage = () => {
        if (projects.length == 0) {
            console.log("here");
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
                projects.map((project) => {
                    if (project.tag == "nujim") {
                        return (
                            <Article key={project._id} details={project}/>
                        )
                    }
                })
            }
        </>
    )
}

export default Nujim;