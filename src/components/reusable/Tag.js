import React from "react";
import Text from "./Text";

const Tag = (props) => {

    const style = {
        padding: "10px 15px",
        background: "#D4D5F0",
        marginRight: "10px",
        borderRadius: "5px",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
    }

    return (
        <div style={style}>
            <Text size="15" color="#464BC8">
                {props.children}
            </Text>
        </div>
    );
}

export default Tag;