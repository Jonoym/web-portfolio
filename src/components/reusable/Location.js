import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import Text from "./Text";


const Location = (props) => {

    const styles = {
        locations: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10px"
        },
        icon: {
            fontSize: "20px",
            marginRight: "5px",
            color: "#878BED"
        },

    }

    return (
        <div style={styles.locations}>
            <FaMapMarkedAlt style={styles.icon}/>
            <Text light size="14">{props.children}</Text>
        </div>
    );
}

export default Location;