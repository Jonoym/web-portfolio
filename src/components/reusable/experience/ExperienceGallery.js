import React from "react";

const ExperienceGallery = (props) => {

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
        marginTop: "250px",
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default ExperienceGallery;