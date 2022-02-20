import React from "react";
import Page from "../reusable/page/Page";
import PageContents from "../reusable/page/PageContents";
import PageHeader from "../reusable/page/PageHeader";

import Text from "../reusable/Text";
import ProjectForm from "../reusable/projects/ProjectForm";
import ExperienceForm from "../reusable/experience/ExperienceForm";

const Update = () => {

    const styles = {
        update: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40%",
            marginTop: "200px"
        },
        column: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <div style={styles.column}>
                <PageContents>
                    <PageHeader>Create</PageHeader>
                    <div style={styles.update}>
                        <Text dark bold margin="30px 0px">Projects</Text>
                        <ProjectForm />
                    </div>
                </PageContents>
                <PageContents>
                    <div style={styles.update}>
                        <Text dark bold margin="30px 0px">Experience</Text>
                        <ExperienceForm />
                    </div>
                </PageContents>
            </div>
        </Page>
    );
}

export default Update;