import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../actions/theme";

import Page from "../page/Page";
import PageContents from "../page/PageContents";
import Text from "../reusable/text/Text";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Bot from "../../images/bot.png";
import "../styles.css";
import styles from "./home.module.css";
import RoundedButton from "../reusable/button/RoundedButton";



const Home = () => {

    const dispatch = useDispatch();
    
    const theme = useSelector((state) => {
        return state.theme
    });
    
    const onClick = () => {
        dispatch(switchTheme(theme));
    }
    
    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents row centred>
                {/* Information Container holding the name, subheading and icons */}
                <div className={`${styles.information} header-${theme}`}>
                    <Text bold size="100" dark>
                        Anton Lui
                    </Text>
                    <Text>
                        Penultimate Software Engineering Student
                    </Text>
                    <div className={styles.icons}>
                        <a href="https://github.com/"><FaGithub className={`${styles.icon} ${theme}`}/></a>
                        <a href="https://www.linkedin.com/"><FaLinkedin className={styles.icon}/></a>
                    </div>
                    <RoundedButton onClick={onClick}>Hello</RoundedButton>
                </div>
                {/* Image */}
                <img src={Bot} className={styles.image}/>
            </PageContents>
        </Page>
    );
}

export default Home;