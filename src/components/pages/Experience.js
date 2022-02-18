import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";

import ExperienceGallery from "../reusable/experience/ExperienceGallery";
import ExperienceCard from "../reusable/experience/ExperienceCard";

const Experience = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents base>
                <PageHeader>Experience</PageHeader>
                <ExperienceGallery>
                    <ExperienceCard />
                    <ExperienceCard />
                </ExperienceGallery>
            </PageContents>
        </Page>
    );
}

export default Experience;