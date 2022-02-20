import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Text from "../text/Text";

import styles from "./icon.module.css";

const Email = (props) => {

    return (
        <div className={`${styles.iconContainer} ${styles.email}`}>
            <FaEnvelope className={styles.icon}/>
            <Text light size={props.fontSize}>{props.children}</Text>
        </div>
    );
}

export default Email;