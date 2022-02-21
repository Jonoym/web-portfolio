import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./page.module.css";
import "../styles.css";

import NavBar from "./navbar/NavBar";
import LinksBar from "./linksbar/LinksBar";
import Footer from "./footer/Footer";

const Page = ({ path, children}) => {

    const [active, setActive] = useState(false);

    const theme = useSelector((state) => {
        return state.theme
    });

    useEffect(() => {
        setActive(true);
    }, [active])

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
            <Footer />
        </div>
    );
}

export default Page;