import React from "react";

const RoundedButton = (props) => {

    const styles = {
        button: {
            cursor: "pointer",
            padding: "10px",

            height: "50px",
            borderRadius: "15px",

            background: "#D4D5F0",
            color: "#464BC8",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }
    }

    return (
        <div style={styles.button}>
            {props.children}
        </div>
    );
}

export default RoundedButton;