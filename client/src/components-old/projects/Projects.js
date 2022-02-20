import React, { useEffect } from "react";

import Page from "../page/Page";
import PageContents from "../page/PageContents";
import PageHeader from "../page/PageHeader";

import ProjectGallery from "./ProjectGallery";

const Projects = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents base>
                <PageHeader>Projects</PageHeader>
                <ProjectGallery />
            </PageContents>
        </Page>
    );
}

export default Projects;