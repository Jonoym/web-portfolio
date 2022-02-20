import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import Text from "../text/Text";

import styles from "./icon.module.css";

const Location = (props) => {

    return (
        <div className={styles.iconContainer}>
            <FaMapMarkedAlt className={styles.smallIcon}/>
            <Text light size="14">{props.children}</Text>
        </div>
    );
}

export default Location;