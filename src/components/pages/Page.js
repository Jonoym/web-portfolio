import React from "react";
import NavBar from "../reusable/NavBar";

const Page = (props) => {
    const styles = {
        height: "100vh",
        background: "#C2C5CB",
        position: "relative",

        display: "flex",
    }

    return (
        <div style = {styles}>
            <NavBar />
            {props.children}
        </div>
    );
}

export default Page;