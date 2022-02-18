import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";

import ProjectCard from "../reusable/projects/ProjectCard";
import ProjectGallery from "../reusable/projects/ProjectGallery";

const Projects = () => {

    const styles = {

    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents base>
                <PageHeader>Projects</PageHeader>
                <ProjectGallery>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </ProjectGallery>
            </PageContents>
        </Page>
    );
}

export default Projects;