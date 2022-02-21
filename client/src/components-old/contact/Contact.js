import React from "react";
import Page from "../page/Page";
import PageContents from "../page/PageContents";
import PageHeader from "../page/PageHeader";

import Text from "../reusable/text/Text";
import Email from "../reusable/icons/Email";
import Form from "../reusable/input/Form";

import styles from "./contact.module.css";

const Contact = () => {

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Contact</PageHeader>
                <div className={styles.contact}>
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