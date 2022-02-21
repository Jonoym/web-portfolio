import React from "react";

import styles from "./tags.module.css"

const Tags = (props) => {

    return (
        <div className={styles.tags}>
            {props.children}
        </div>
    );
}

export default Tags;