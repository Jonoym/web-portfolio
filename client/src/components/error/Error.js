import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../actions/theme";

import Page from "../page/Page";
import PageContents from "../page/PageContents";
import PageHeader from "../page/PageHeader";
import LinkButton from "../reusable/button/LinkButton";
import Text from "../reusable/text/Text";
import Bot from "../../images/bot.png";
import styles from "./error.module.css"

const Error = () => {

    
    const theme = useSelector((state) => {
        return state.theme
    });

    const getStyles = () => {
        console.log(theme);
        if (theme === "dark") {
            return styles.imagedark;
        } else {
            return
        }
    }

    return (
        <Page>
            {/* Page Contents that will be passed as children components to the Page component */}
            <PageContents>
                <PageHeader>Ooops</PageHeader>
                <div className={styles.error}>
                    <img src={Bot} className={`${styles.image} ${getStyles()}`}/>
                    <div className={styles.information}>
                        <Text bold>
                            Looks like you've gotten lost.
                        </Text>
                        <Text margin="30px 0px 100px 0px">
                            Even I'm not sure how you got here.
                        </Text>
                        <LinkButton to="/">
                            Take Me Home
                        </LinkButton>
                    </div>
                </div>
            </PageContents>
        </Page>
    );
}

export default Error;