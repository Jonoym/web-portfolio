import React from "react";

const ProjectGallery = (props) => {

    const style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "200px",
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default ProjectGallery;