import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Text from "../Text";


const Email = (props) => {

    const styles = {
        email: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "40px"
        },
        icon: {
            fontSize: "25px",
            marginRight: "10px",
            color: "#10102C"
        },

    }

    return (
        <div style={styles.email}>
            <FaEnvelope style={styles.icon}/>
            <Text light size={props.fontSize}>{props.children}</Text>
        </div>
    );
}

export default Email;