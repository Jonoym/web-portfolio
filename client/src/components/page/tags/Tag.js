import React from "react";
import { useSelector } from "react-redux";

import styles from "./tags.module.css";
import "../../styles.css";

const Tag = ({ children, main }) => {

    const theme = useSelector((state) => state.theme);

    const isMainTag = (main) => {
        if (main) {
            return "main";
        } else {
            return "";
        }
    }

    return (
        <div className={`${styles.tag} tag-${theme} text bold tag-${isMainTag(main)}-${theme}`}>{children}</div>
    );
}

export default Tag;