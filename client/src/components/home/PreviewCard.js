import React from "react";
import { useSelector } from "react-redux";

import styles from "./home.module.css";
import "../styles.css";

const PreviewCard = ({ details }) => {

    const theme = useSelector((state) => state.theme);
    
    return (
        <div>
            Hello
        </div>
    )
}

export default PreviewCard;