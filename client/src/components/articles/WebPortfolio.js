import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";

import styles from "./article.module.css";
import "../styles.css";

import Page from "../page/Page";
import Article from "./Article";

const WebPortfolio = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const theme = useSelector((state) => state.theme);

    const projects = useSelector((state) => state.projects);
    
    const getLoadingPage = () => {
        if (projects.length == 0) {
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
                    if (project.tag == "web-portfolio") {
                        return (
                            <Article key={project._id} details={project}/>
                        )
                    }
                })
            }
        </>
    )
}

export default WebPortfolio;