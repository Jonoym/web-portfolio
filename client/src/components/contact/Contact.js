import React from "react";
import { useSelector } from "react-redux";
import { FaPaperPlane } from "react-icons/fa";


import Page from "../page/Page";

import styles from "./contact.module.css";
import "../styles.css";

const Contact = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page path="/">
            <div className={styles.hero}>
                <div className={styles.contact}>
                    <div className={`subheaderText subheaderText-${theme} italics`}>If you'd ever like to get in touch,</div>
                    <div className={`${styles.header} headerText-${theme}`}>Contact Me!</div>
                    <div className={`subheaderText subheaderText-${theme} italics`}>I'm always keen to chat</div>
                </div>
                <div className={styles.form}>
                    <div className={styles.details}>
                        <div className={`${styles.name} subheader subheaderText-${theme} italics`}>
                            Name
                            <input>
                            </input>
                        </div>
                        <div className={`${styles.email} subheader subheaderText-${theme} italics`}>
                            Email
                            <input>
                            </input>
                        </div>
                    </div>
                    <div className={`${styles.message} subheader subheaderText-${theme} italics`}>
                        Message
                        <textarea>

                        </textarea>
                    </div>
                    <div className={styles.iconContainer}>
                        <FaPaperPlane className={`icon-${theme} ${styles.icon}`}/>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default Contact;