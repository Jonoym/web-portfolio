import React from "react";
import Page from "../reusable/Page";
import PageContents from "../reusable/PageContents";
import PageHeader from "../reusable/PageHeader";

import ExperienceGallery from "../reusable/experience/ExperienceGallery";
import ExperienceCard from "../reusable/experience/ExperienceCard";

const Experience = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Experience</PageHeader>
                <ExperienceGallery>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </ExperienceGallery>
            </PageContents>
        </Page>
    );
}

export default Experience;