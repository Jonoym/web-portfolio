import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { createMessage } from "../../actions/contact";

import Page from "../page/Page";

import styles from "./contact.module.css";
import "../styles.css";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    const [contactMessage, setContactMessage] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log(contactMessage);
        if (contactMessage.name != "") {
            dispatch(createMessage(contactMessage));
        }
        setSubmitted(true);
    }
    
    const getContents = () => {
        if (submitted) {
            return (
                <div className={styles.hero}>
                    <div className={`headerText headerText-${theme}`}>Thanks!</div>
                    <div className={`subheaderText subheaderText-${theme} italics`}>Everything was submitted successfully!</div>
                    <div className={`subheaderText subheaderText-${theme} italics`}>I'll get back to you as soon as possible</div>
                </div>
            )
        }

        return (
            <div className={styles.hero}>
                <div className={styles.contact}>
                    <div className={`subheaderText subheaderText-${theme} italics`}>If you'd ever like to get in touch,</div>
                    <div className={`headerText headerText-${theme} ${styles.headerContainer}`}>
                        <div>
                            Contact Me!
                        </div>
                    </div>
                    <div className={`subheaderText subheaderText-${theme} italics`}>I'm always keen to chat</div>
                </div>
                <div className={styles.form}>
                    <div className={styles.details}>
                        <div className={`${styles.name} subheader headerText-${theme} italics`}>
                            <div className={styles.formLabel}>
                                Name
                            </div>
                            <input
                                className={`input-${theme}`}
                                name="name"
                                value={contactMessage.name}
                                onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })}
                            >
                            </input>
                        </div>
                        <div className={`${styles.email} subheader headerText-${theme} italics`}>
                            <div className={styles.formLabel}>
                                Email
                            </div>
                            <input
                                className={`input-${theme}`}
                                name="name"
                                value={contactMessage.email}
                                onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={`${styles.message} subheader headerText-${theme} italics`}>
                        <div className={styles.formLabel}>
                            Message
                        </div>
                        <textarea
                            className={`input-${theme}`}
                            name="name"
                            value={contactMessage.message}
                            onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })}
                        >

                        </textarea>
                    </div>
                    <div className={`${styles.iconContainer}`}>
                        <FaPaperPlane
                            onClick={onSubmitForm}
                            className={`icon-${theme}
                            ${styles.icon}`}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Page path="/">

            { getContents() }

        </Page>
    );
}

export default Contact;