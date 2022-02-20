import React from "react";
import { 
    Link
} from "react-router-dom";

import styles from "./button.module.css";


const LinkButton = (props) => {

    return (
        <Link to={props.to} className={styles.button}>
            {props.children}
        </Link>
    );
}

export default LinkButton;