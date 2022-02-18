import React from "react";
import Page from "../reusable/Page";
import PageContents from "../reusable/PageContents";
import PageHeader from "../reusable/PageHeader";

import ProjectCard from "../reusable/projects/ProjectCard";
import ProjectGallery from "../reusable/projects/ProjectGallery";

const Projects = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Projects</PageHeader>
                <ProjectGallery>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </ProjectGallery>
            </PageContents>
        </Page>
    );
}

export default Projects;