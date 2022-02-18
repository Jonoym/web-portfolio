import React from "react";

const Text = (props) => {

    const styles = {
    }

    if (props.bold) {
        styles.fontWeight = "bold";
    }

    if (props.size) {
        styles.fontSize = `${props.size}px`;
    } else {
        styles.fontSize = `25px`;
    }

    if (props.dark) {
        styles.color = "#10102C";
    } else {
        styles.color = "#3B3B50";
    }
    
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default Text;