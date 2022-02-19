import React, { useEffect } from "react";

import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";

import ProjectGallery from "../reusable/projects/ProjectGallery";
import ProjectForm from "../reusable/projects/ProjectForm";

const Projects = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents base>
                <PageHeader>Projects</PageHeader>
                <ProjectGallery>
                </ProjectGallery>
                <ProjectForm />
            </PageContents>
        </Page>
    );
}

export default Projects;