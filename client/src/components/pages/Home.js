import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import Text from "../reusable/Text";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Bot from "../../images/bot.png";



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
            height: "600px",
            width: "600px",
            marginLeft: "100px",

            borderRadius: "100%",
            background: "#10102C"
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents row centred>
                {/* Information Container holding the name, subheading and icons */}
                <div style={styles.information}>
                    <Text bold size="100" dark>
                        Anton Lui
                    </Text>
                    <Text>
                        Penultimate Software Engineering Student
                    </Text>
                    <div style={styles.icons}>
                        <a href="https://github.com/">
                            <FaGithub style={styles.icon}/>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin style={styles.icon}/>
                        </a>

                    </div>
                </div>
                {/* Image */}
                <img src={Bot} style={styles.image}/>
            </PageContents>
        </Page>
    );
}

export default Home;