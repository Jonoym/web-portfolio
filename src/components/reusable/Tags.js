import React from "react";

const Tags = (props) => {

    const style = {
        display: "flex",
        flexDiretion: "row"
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default Tags;