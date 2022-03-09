import React from "react";
import { useSelector } from "react-redux";

import styles from "../article.module.css";
import "../../styles.css";

import Article from "../Article";

const VR = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Article />
    )
}

export default VR;