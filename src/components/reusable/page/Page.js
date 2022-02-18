import React from "react";
import NavBar from "../NavBar";

const Page = (props) => {
    const styles = {
        height: "100vh", // Remove this later and work on centering items

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