import React from "react";
import Text from "../reusable/text/Text";

import Location from "../reusable/icons/Location";
import Date from "../reusable/icons/Date";
import Tag from "../reusable/tags/Tag";
import Tags from "../reusable/tags/Tags";

const ExperienceCard = ({ details }) => {

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
            justifyContent: "center",
            padding: "40px"
        }
    }

    const getTags = (tags) => {
        return tags[0].split(", ");
    }

    return (
        <div style={styles.card}>
            <div style={styles.information}>
                <Text bold size="30" dark>{details.role}</Text>
                <Text light size="20">{details.employer}</Text>
                <Date>{details.date}</Date>
                <Location>{details.location}</Location>
            </div>
            <div style={styles.divider}>
                <div style={styles.line} />
            </div>
            <div style={styles.summary}>
                <Text light size="18">{details.text}</Text>
                <Tags>
                    {
                        getTags(details.tags).map((tag) => {
                            return (
                                <Tag key={tag}>{tag}</Tag>
                            );
                        })
                    }
                </Tags>
            </div>
        </div>
    );
}

export default ExperienceCard;