import React from "react";

const PageContents = (props) => {

    const styles = {
        position: "relative",
        width: "90%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        margin: "0px 100px",
    }

    if (props.row) {
        styles.flexDirection = "row";
    }

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default PageContents;