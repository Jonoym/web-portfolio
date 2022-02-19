import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";
import Text from "../reusable/Text";

import Bot from "../../images/bot.png";

const About = () => {

    const styles = {
        introduction: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "left",
            marginLeft: "100px",
            maxWidth: "70%"
        },
        row: {
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px"
        },
        image: {
            minHeight: "400px",
            minWidth: "400px",
            maxHeight: "400px",
            maxWidth: "400px",

            borderRadius: "100%",
            background: "#10102C"
        },
        skills: {

        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents column>
                <PageHeader>About</PageHeader>
                <div style={styles.row}>
                    {/* Image */}
                    <img src={Bot} style={styles.image}/>

                    <div style={styles.introduction}>
                        <Text bold size="50" dark>
                            Hello
                        </Text>
                        <Text size="30">
                            I'm a Software Engineer Student at the University of Auckland. I'm enthusiastic about programming, and development.
                        </Text>
                        <Text size="30">
                            My dream is to make some big cash from big corporation thanks
                        </Text>
                    </div>
                </div>
                <div style={styles.skills}>
                    <Text bold size="50" dark>Hello</Text>
                </div>
            </PageContents>
        </Page>
    );
}

export default About;