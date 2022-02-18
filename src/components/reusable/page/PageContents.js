import React from "react";

const PageContents = (props) => {

    const styles = {
        position: "relative",
        width: "90%",
        height: "100%",

        margin: "0px 100px",
    }
    
    if (!props.base) {
        styles.display = "flex";
        styles.flexDirection = "column";
        styles.justifyContent = "center";
        styles.alignItems = "center";
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