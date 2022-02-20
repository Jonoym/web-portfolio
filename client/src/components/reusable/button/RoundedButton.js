import React from "react";

import styles from "./button.module.css";

const RoundedButton = (props) => {

    return (
        <div onClick={props.onClick} className={styles.button}>
            {props.children}
        </div>
    );
}

export default RoundedButton;