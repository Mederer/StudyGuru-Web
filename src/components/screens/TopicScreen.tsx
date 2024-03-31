import TopicList from "../../features/topics/TopicList.tsx";
import styles from "./TopicScreen.module.scss";
import screenStyles from "./ScreenStyles.module.scss";
import IconLinkButton from "../common/IconLinkButton.tsx";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

function TopicScreen() {
    return (
        <div className={styles.topicScreen}>
            <div className={screenStyles.topRow}>
                <h1>Topics</h1>
                <div className={screenStyles.btnContainer}>
                    <IconLinkButton
                        to={"/topics/create"}
                        icon={faPlus}
                        size={"2x"}
                    />
                </div>
            </div>
            <TopicList />
        </div>
    );
}

export default TopicScreen;
