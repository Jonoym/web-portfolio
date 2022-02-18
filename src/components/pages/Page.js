import React from "react";
import NavBar from "../reusable/NavBar";

const Page = (props) => {
    const styles = {
        height: "100vh",

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