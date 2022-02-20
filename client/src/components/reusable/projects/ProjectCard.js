import React from "react";
import Text from "../Text";

import { useDispatch } from "react-redux";

import { deleteProject } from "../../../actions/projects";

import Date from "../icons/Date";
import Tag from "../Tag";
import Tags from "../Tags";
import RoundedButton from "../button/RoundedButton";

const ProjectCard = ({ details }) => {

    const dispatch = useDispatch();

    const styles = {
        card: {
            width: "450px",
            minHeight: "600px",
            maxHeight: "600px",
            background: "#DDE2E9",
    
            borderRadius: "20px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    
            margin: "0px 0px 40px 40px",
    
            position: "relative",
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

    const getTags = (tags) => {
        return tags[0].split(", ");
    }

    return (
        <div style={styles.card}>
            <div style={styles.preview}>
                
            </div>

            <div style={styles.information}>
                <Text bold size="30" dark>{details.title}</Text>
                <Date>{details.date}</Date>
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
                <RoundedButton onClick={() => dispatch(deleteProject(details._id))}>Delete</RoundedButton>
            </div>
        </div>
    );
}

export default ProjectCard;