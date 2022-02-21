import React from "react";
import Page from "../page/Page";
import PageContents from "../page/PageContents";
import PageHeader from "../page/PageHeader";

import Text from "../reusable/text/Text";
import ProjectForm from "../projects/ProjectForm";
import ExperienceForm from "../experience/ExperienceForm";

import styles from "./create.module.css";

const Update = () => {

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <div className={styles.forms}>
                <PageContents>
                    <PageHeader>Create</PageHeader>
                    <div className={styles.update}>
                        <Text dark bold margin="30px 0px">Projects</Text>
                        <ProjectForm />
                    </div>
                </PageContents>
                <PageContents>
                    <div className={styles.update}>
                        <Text dark bold margin="30px 0px">Experience</Text>
                        <ExperienceForm />
                    </div>
                </PageContents>
            </div>
        </Page>
    );
}

export default Update;