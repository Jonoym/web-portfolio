import React from "react";
import { useSelector } from "react-redux";
import "../styles.css";
import styles from "./page.module.css";
import NavBar from "../NavBar";

const Page = (props) => {

    const theme = useSelector((state) => {
        return state.theme
    });

    // const styles = {
    //     background: "#C2C5CB",

    //     display: "flex",
    //     position: "relative"
    // }

    // if (props.col) {
    //     styles.flexDirection = "column";
    // }

    return (
        <div className={`${styles.page} background-${theme}`}>
            <NavBar />
            {props.children}
        </div>
    );
}

export default Page;