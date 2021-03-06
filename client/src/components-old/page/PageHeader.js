import React from "react";
import Text from "../reusable/text/Text";

const PageHeader = (props) => {

    const styles = {
        position: "absolute",
        top: "80px",
        left: "8%"
    }
    
    return (
        <div style={styles}>
            <Text bold size="50" dark>
                {props.children}
            </Text>
        </div>
    );
}

export default PageHeader;