import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";
import LinkButton from "../reusable/button/LinkButton";
import Text from "../reusable/Text";

import Bot from "../../images/bot.png";
import { FaFileExcel } from "react-icons/fa";

const Error = () => {

    const styles = {
        image: {
            height: "400px",
            width: "400px",

            borderRadius: "100%",
            background: "#10102C",

            margin: "30px 0px",
        },
        error: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        information: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "50px"
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Ooops</PageHeader>
                <div style={styles.error}>
                    <img src={Bot} style={styles.image}/>
                    <div style={styles.information}>
                        <Text bold>
                            Looks like you've gotten lost.
                        </Text>
                        <Text margin="30px 0px 100px 0px">
                            Even I'm not sure how you got here.
                        </Text>
                        <LinkButton to="/">
                            Take Me Home
                        </LinkButton>
                    </div>
                </div>
            </PageContents>
        </Page>
    );
}

export default Error;