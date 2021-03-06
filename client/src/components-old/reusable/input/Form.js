import React from "react";
import RoundedButton from "../button/RoundedButton";

import Input from "./Input";
import TextArea from "./TextArea";
import { FaPaperPlane } from "react-icons/fa";

const Form = () => {

    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "end"
        },
        icon: {
            fontSize: "30px",
            color: "#464BC8"
        }
    }

    return (
        <form style={styles.form}>
            <Input label="Name"></Input>
            <Input label="Email"></Input>
            <TextArea label="Message" height="200px"></TextArea>
            <RoundedButton><FaPaperPlane style={styles.icon}/></RoundedButton>
        </form>
    );
}

export default Form;