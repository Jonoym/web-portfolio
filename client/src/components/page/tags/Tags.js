import React from "react";

import styles from "./tags.module.css";
import "../../styles.css";
import Tag from "./Tag";

const Tags = ({ tags, alignRight }) => {

    const splitTags = () => {
        if (tags != null) {
            return tags.split(", ");
        }
        return [];
    }

    const alignRightClass = () => {
        if (alignRight) {
            return styles.alignRight
        }
    }

    return (
        <div className={`${styles.tags} ${alignRightClass()}`}>
            {
                splitTags().map((tag) => {
                    return (<Tag key={tag}>{tag}</Tag>);
                })
            }
        </div>
    );
}

export default Tags;