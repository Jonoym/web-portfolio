import React from "react";
import { useSelector } from "react-redux";

import styles from "./tags.module.css";
import "../../styles.css";

const Tag = ({ children, main }) => {

    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.tag} tag-${theme} text bold tag-${main}-${theme}`}>{children}</div>
    );
}

export default Tag;