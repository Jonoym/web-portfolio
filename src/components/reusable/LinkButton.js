import React from "react";
import { 
    Link
} from "react-router-dom";

const LinkButton = (props) => {

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

            textDecoration: "none",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }
    }

    return (
        <Link to={props.to} style={styles.button}>
            {props.children}
        </Link>
    );
}

export default LinkButton;