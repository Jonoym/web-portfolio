import React from "react";

const ExperienceGallery = (props) => {

    const style = {
        display: "flex",
        flexDirection: "column",
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

export default ExperienceGallery;