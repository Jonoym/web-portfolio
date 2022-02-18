import React from "react";
import NavBar from "../reusable/NavBar";

const Page = (props) => {
    const styles = {
        height: "100vh",
        background: "#C2C5CB",
    }

    return (
        <div style = {styles}>
            <NavBar />
        </div>
    );
}

export default Page;