import React from "react";

import styles from "./tags.module.css";
import "../../styles.css";
import Tag from "./Tag";

const Tags = ({ tags }) => {

    const splitTags = () => {
        if (tags != null) {
            return tags.split(", ");
        }
        return [];
    }

    return (
        <div className={styles.tags}>
            {
                splitTags().map((tag) => {
                    return (<Tag key={tag}>{tag}</Tag>);
                })
            }
            {/* <Tag main>Unity</Tag>
            <Tag>Git</Tag>
            <Tag>C#</Tag>
            <Tag>Research</Tag> */}
        </div>
    );
}

export default Tags;