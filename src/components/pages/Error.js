import React from "react";
import Page from "../reusable/Page";
import PageContents from "../reusable/PageContents";
import PageHeader from "../reusable/PageHeader";
import LinkButton from "../reusable/LinkButton";
import Text from "../reusable/Text";

import Bot from "../../images/bot.png";

const Error = () => {

    const styles = {
        image: {
            height: "400px",
            width: "400px",

            borderRadius: "100%",
            background: "#10102C",

            margin: "30px 0px",
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Ooops</PageHeader>
                <Text bold>
                    Looks like you've gotten lost.
                </Text>
                <Text>
                    Even I'm not sure how you got here.
                </Text>
                <img src={Bot} style={styles.image}/>
                <LinkButton to="/">
                    Take Me Home
                </LinkButton>
            </PageContents>
        </Page>
    );
}

export default Error;