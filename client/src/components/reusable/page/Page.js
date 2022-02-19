import React from "react";
import NavBar from "../NavBar";

const Page = (props) => {
    const styles = {

        background: "#C2C5CB",

        display: "flex",
        position: "relative"
    }

    return (
        <div style = {styles}>
            <NavBar />
            {props.children}
        </div>
    );
}

export default Page;