import React from "react";

const TextArea = (props) => {

    const style = {
        width: "100%",
        height: props.height,
        padding: "12px 20px",
        fontSize: "20px",
        color: "#414365",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        border: "none",
        background: "#DDE2E9",
        
        marginBottom: "20px",
        resize: "none"
    }

    return (
        <textarea type="text" placeholder={props.label} style={style} />
    );
}

export default TextArea;