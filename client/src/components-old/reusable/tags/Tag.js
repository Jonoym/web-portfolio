import React from "react";
import Text from "../text/Text";

import styles from "./tags.module.css"

const Tag = (props) => {

    return (
        <div className={styles.tag}>
            <Text size="15" color="#464BC8">
                {props.children}
            </Text>
        </div>
    );
}

export default Tag;