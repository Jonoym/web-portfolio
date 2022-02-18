import React from "react";
import Text from "../Text";

import Location from "../Location";
import Date from "../Date";
import Tag from "../Tag";
import Tags from "../Tags";

const ExperienceCard = () => {

    const styles = {
        card: {
            width: "75%",
            minHeight: "230px",
            maxHeight: "230px",
            background: "#DDE2E9",
    
            borderRadius: "20px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    
            marginBottom: "40px",
    
            display: "flex",
            flexDirection: "row"
        },
        information: {
            width: "28%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "left",

            padding: "40px"
        },
        divider: {
            width: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        line: {
            height: "80%",
            width: "1px",
            background: "#C2C5CB"
        },
        summary: {
            width: "70%",
            display: "flex",
            flexDirection: "column",    
            justifyContent: "space-evenly",
            padding: "40px"
        }
    }

    return (
        <div style={styles.card}>
            <div style={styles.information}>
                <Text bold size="30" dark>Software Engineering Intern</Text>
                <Text light size="20">University Of Auckland</Text>
                <Date>Nov 2021 - Present</Date>
                <Location>Auckland, NZ</Location>
            </div>
            <div style={styles.divider}>
                <div style={styles.line} />
            </div>
            <div style={styles.summary}>
                <Text light size="18">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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

export default ExperienceCard;