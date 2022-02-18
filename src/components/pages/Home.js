import React from "react";
import Page from "./Page";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {

    const styles = {
        pageContents: {
            position: "relative",
            width: "100%",
            height: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        information: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        name: {
            fontSize: "100px",
            fontWeight: "bold",

            color: "#10102C",
        },
        subheading: {
            fontSize: "25px",

            color: "#3B3B50",
        },
        icons: {
            display: "flex",
            flexDirection: "row"
        },
        icon: {
            fontSize: "48px",
            color: "#10102C",
            margin: "20px 15px"
        },
        image: {
            height: "400px",
            width: "400px",
            marginLeft: "100px",

            borderRadius: "100%",
            background: "#10102C"
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <div style={styles.pageContents}>
                {/* Information Container holding the name, subheading and icons */}
                <div style={styles.information}>
                    <div style={styles.name}>
                        Anton Lui
                    </div>
                    <div style={styles.subheading}>
                        Penultimate Software Engineering Student
                    </div>
                    <div style={styles.icons}>
                        <FaGithub style={styles.icon}/>
                        <FaLinkedin style={styles.icon}/>
                    </div>
                </div>
                {/* Image */}
                <div style={styles.image}>

                </div>
            </div>
        </Page>
    );
}

export default Home;