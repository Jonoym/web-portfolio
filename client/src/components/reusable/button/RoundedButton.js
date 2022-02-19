import React from "react";

const RoundedButton = (props) => {

    const styles = {
        button: {
            cursor: "pointer",
            padding: "10px",

            height: "60px",
            borderRadius: "15px",

            background: "#D4D5F0",
            color: "#464BC8",

            display: "flex",
            width: "160px",
            justifyContent: "center",
            alignItems: "center",

            textDecoration: "none",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontSize: "20px"
        }
    }

    return (
        <div onClick={props.onClick} style={styles.button}>
            {props.children}
        </div>
    );
}

export default RoundedButton;