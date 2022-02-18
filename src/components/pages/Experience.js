import React from "react";
import Page from "./Page";

const Experience = () => {

    const styles = {
        pageContents: {
            position: "relative",
            width: "90%",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            margin: "0px 100px",
        },
        pageHeader: {
            position: "absolute",
            top: "80px",
            left: "8%",

            fontSize: "50px",
            fontWeight: "bold",

            color: "#10102C",
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <div style={styles.pageContents}>
                <div style={styles.pageHeader}>
                    Experience
                </div>
            </div>
        </Page>
    );
}

export default Experience;