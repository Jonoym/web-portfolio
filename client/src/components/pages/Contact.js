import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";

import Text from "../reusable/Text";
import Email from "../reusable/icons/Email";
import Form from "../reusable/input/Form";

const Contact = () => {

    const styles = {
        contact: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40%",
            marginTop: "200px"
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Contact</PageHeader>
                <div style={styles.contact}>
                    <Text light>If you’d ever like to get in touch, contact me!</Text>
                    <Text light bold margin="30px 0px">Anton Lui</Text>
                    <Email light bold>anton.lui@gmail.com</Email>
                    <Form />
                </div>

            </PageContents>
        </Page>
    );
}

export default Contact;