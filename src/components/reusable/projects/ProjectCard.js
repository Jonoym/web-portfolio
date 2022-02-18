import React from "react";
import Text from "../Text";

import Location from "../icons/Location";
import Date from "../icons/Date";
import Tag from "../Tag";
import Tags from "../Tags";

const ProjectCard = () => {

    const styles = {
        card: {
            width: "450px",
            minHeight: "600px",
            maxHeight: "600px",
            background: "#DDE2E9",
    
            borderRadius: "20px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    
            margin: "0px 0px 40px 40px",
    
            display: "flex",
            flexDirection: "column"
        },
        preview: {
            height: "225px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "left",
    
            padding: "40px",
        },
        information: {
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "left",

            padding: "40px"
        },
        summary: {
            width: "50%",
            display: "flex",
            flexDirection: "column",    
            justifyContent: "space-evenly",
            padding: "40px"
        }
    }

    return (
        <div style={styles.card}>
            <div style={styles.preview}>
                
            </div>

            <div style={styles.information}>
                <Text bold size="30" dark>Software Engineering Intern</Text>
                <Date>Nov 2021 - Present</Date>
                <Text light size="18">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                </Text>
                <Tags>
                    <Tag>Programming</Tag>
                    <Tag>React</Tag>
                    <Tag>React Native</Tag>
                    <Tag>Firebase</Tag>
                </Tags>
            </div>
        </div>
    );
}

export default ProjectCard;