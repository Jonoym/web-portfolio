import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./page.module.css";
import "../styles.css";

import Menu from "./menu/Menu";
import NavBar from "./navbar/NavBar";
import LinksBar from "./linksbar/LinksBar";
import Footer from "./footer/Footer";

const Page = ({ path, children}) => {

    const [active, setActive] = useState(false);

    const theme = useSelector((state) => state.theme);

    useEffect(() => {
        setActive(true);
    }, [active])

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

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
            <Menu className={styles.menu}/>
        </div>
    );
}

export default Page;