import React from "react";
import Page from "../page/Page";
import PageContents from "../page/PageContents";
import PageHeader from "../page/PageHeader";

import ExperienceGallery from "./ExperienceGallery";

const Experience = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents base>
                <PageHeader>Experience</PageHeader>
                <ExperienceGallery />
            </PageContents>
        </Page>
    );
}

export default Experience;