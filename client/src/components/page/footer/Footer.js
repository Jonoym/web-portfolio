import React from "react";
import { useSelector } from "react-redux";

import styles from "./footer.module.css";
import "../../styles.css"

const Footer = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <div className={`${styles.footerBar}`}>
            <div className={`${styles.footer} subheaderText-${theme} text`}>
                @2022 coded and designed by jonoym
            </div>
        </div>
    );
}

export default Footer;