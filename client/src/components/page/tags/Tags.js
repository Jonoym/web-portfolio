import React from "react";

import styles from "./tags.module.css";
import "../../styles.css";
import Tag from "./Tag";

const Tags = () => {

    return (
        <div className={styles.tags}>
            <Tag main="main">Unity</Tag>
            <Tag>Git</Tag>
            <Tag>C#</Tag>
            <Tag>Research</Tag>
        </div>
    );
}

export default Tags;