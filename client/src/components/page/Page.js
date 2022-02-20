import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./page.module.css";
import "../styles.css";

import NavBar from "./navbar/NavBar";
import LinksBar from "./linksbar/LinksBar";

const Page = ({ path, children}) => {

    const [active, setActive] = useState(false);

    const theme = useSelector((state) => {
        return state.theme
    });

    useEffect(() => {
        setActive(true);
    })

    const getActivePage = () => {
        if (active) {
            return "opacity";
        } else {
            return ""
        }
    }

    return (
        <div className={`background-${theme} ${styles.page}`}>
            <div className={`${styles.page} opacityOff ${getActivePage()}`}>
                {children}
            </div>
            <NavBar />
            <LinksBar />
        </div>
    );
}

export default Page;