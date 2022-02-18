import React from "react";

const Tags = (props) => {

    const style = {
        display: "flex",
        flexDiretion: "row",
        flexWrap: "wrap",
        marginTop: "20px"
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default Tags;