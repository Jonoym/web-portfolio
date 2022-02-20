import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Text from "../text/Text";

import styles from "./icon.module.css";

const Date = (props) => {

    return (
        <div className={`${styles.iconContainer} ${styles.date}`}>
            <FaCalendarAlt className={styles.smallIcon}/>
            <Text light size="14">{props.children}</Text>
        </div>
    );
}

export default Date;