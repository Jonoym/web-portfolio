import React from "react";
import Page from "./Page";
import RoundedButton from "../reusable/RoundedButton";

const Error = () => {

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
        },
        heading: {
            fontSize: "25px",

            color: "#3B3B50",
            fontWeight: "bold",

            marginBottom: "30px"
        },
        subheading: {
            fontSize: "25px",

            color: "#3B3B50",
        },
        image: {
            height: "400px",
            width: "400px",

            borderRadius: "100%",
            background: "#10102C",

            margin: "30px 0px"

        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <div style={styles.pageContents}>
                <div style={styles.pageHeader}>
                    Ooops
                </div>
                <div style={styles.heading}>
                    Looks like you've gotten lost.
                </div>
                <div style={styles.subheading}>
                    Even I'm not sure how you got here.
                </div>
                <div style={styles.image}>

                </div>

                <RoundedButton>
                    Take Me Home
                </RoundedButton>
            </div>
        </Page>
    );
}

export default Error;