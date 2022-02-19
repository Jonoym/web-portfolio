import React from "react";

const Input = (props) => {

    const style = {
        width: "100%",
        padding: "12px 20px",
        fontSize: "20px",
        color: "#414365",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        border: "none",
        background: "#DDE2E9",
        
        marginBottom: "20px"
    }

    return (
        <input type="text" placeholder={props.label} style={style} />
    );
}

export default Input;