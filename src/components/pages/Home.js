import React from "react";
import Page from "./Page";
import PageContents from "../reusable/PageContents";
import Text from "../reusable/Text";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {

    const styles = {
        information: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
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
            <PageContents row>
                {/* Information Container holding the name, subheading and icons */}
                <div style={styles.information}>
                    <Text emphasis size="100" dark>
                        Anton Lui
                    </Text>
                    <Text>
                        Penultimate Software Engineering Student
                    </Text>
                    <div style={styles.icons}>
                        <FaGithub style={styles.icon}/>
                        <FaLinkedin style={styles.icon}/>
                    </div>
                </div>
                {/* Image */}
                <div style={styles.image}>

                </div>
            </PageContents>
        </Page>
    );
}

export default Home;