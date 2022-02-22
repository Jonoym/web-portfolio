import React from "react";
import { useSelector } from "react-redux";

import Page from "../page/Page";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";


import styles from "./about.module.css";
import "../styles.css";

const About = () => {

    const theme = useSelector((state) => state.theme);

    return (
        <Page path="/about">
            <div className={styles.container}>
                <div className={styles.image}>

                </div>
                <div className={styles.contents}>
                    <div className={`subheaderText subheaderText-${theme} italics`}>Nice to meet you!</div>
                    <div className={`${styles.headerText} headerText-${theme}`}>I'm Jonathan</div>
                    <div className={styles.about}>
                        <div className={`${styles.aboutContent}`}>
                            <div className={`${styles.locations}`}>
                                <FaMapMarkerAlt className={`${styles.icon} icon-${theme}`}/>
                                <span className={`text subheaderText-${theme} bold ${styles.spaced}`}>Location: </span>
                                <span className={`text subheaderText-${theme} ${styles.spaced}`}>Brisbane, AU</span>
                            </div>
                            <div className={`${styles.locations}`}>
                                <FaHome className={`${styles.icon} icon-${theme}`}/>
                                <span className={`text subheaderText-${theme} bold ${styles.spaced}`}>From: </span>
                                <span className={`text subheaderText-${theme} ${styles.spaced}`}>Auckland, NZ</span>
                            </div>
                        </div>
                        <div className={`${styles.aboutContent} text subheaderText-${theme} bold`}>
                            I'm a developer pursuing a degree in Software Engineering at the University of Queensland.
                        </div>
                        <div className={`${styles.aboutContent} text subheaderText-${theme} bold`}>
                        <div className={styles.listItem}>
                                Some things that I've been up to recently include:
                            </div>
                            <ul>
                                <li className={`${styles.listItem} text subheaderText-${theme} italics`}>
                                    Developing games and immersing myself in Virtual Reality Environments.
                                </li>
                                <li className={`${styles.listItem} text subheaderText-${theme} italics`}>
                                    Swinging my arms around like a maniac while playing BeatSaber.
                                </li>
                                <li className={`${styles.listItem} text subheaderText-${theme} italics`}>
                                    Telling myself that I'm going to fix my sleep schedule.
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.aboutContent} text subheaderText-${theme} bold`}>
                            <div className={styles.listItem}>
                                A few hobbies that I enjoy are:
                            </div>
                            <ul>
                                <li className={`${styles.listItem} text subheaderText-${theme} italics`}>
                                    Coding throughout a week-long Test Cricket match
                                </li>
                                <li className={`${styles.listItem} text subheaderText-${theme} italics`}>
                                    Speedrunning a TV show at 2x speed
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.aboutContent} text subheaderText-${theme}`}>
                            I'm still learning as I go. There's lots of technologies that I'm willing to try and I have barely scratched the surface.
                        </div>
                        <div className={`${styles.aboutContent} text subheaderText-${theme}`}>
                            Currently looking for opportunities or internships to further develop my career in tech.
                        </div>
                    </div>
                    <div className={`${styles.closingText} headerText-${theme}`}>Bye!</div>
                </div>
            </div>
        </Page>
    );
}

export default About;