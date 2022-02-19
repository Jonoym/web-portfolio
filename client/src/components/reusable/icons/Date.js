import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Text from "../Text";


const Date = (props) => {

    const styles = {
        locations: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px 0px"
        },
        icon: {
            fontSize: "20px",
            marginRight: "10px",
            color: "#878BED"
        },

    }

    return (
        <div style={styles.locations}>
            <FaCalendarAlt style={styles.icon}/>
            <Text light size="14">{props.children}</Text>
        </div>
    );
}

export default Date;