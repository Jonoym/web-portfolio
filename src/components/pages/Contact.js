import React from "react";
import Page from "./Page";
import PageContents from "../reusable/PageContents";
import PageHeader from "../reusable/PageHeader";

const Contact = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>
                    Contact
                </PageHeader>
            </PageContents>
        </Page>
    );
}

export default Contact;