import CreateTopicForm from "../../features/topics/CreateTopicForm.tsx";
import BackButton from "../common/BackButton.tsx";
import styles from "./CreateTopicScreen.module.scss";

function CreateTopicScreen() {
    return (
        <div className={styles.createTopicScreen}>
            <div className={styles.topRow}>
                <BackButton extraStyles={{ marginRight: "1rem" }} />
                <h1 className={styles.title}>Create Topic</h1>
            </div>
            <CreateTopicForm />
        </div>
    );
}

export default CreateTopicScreen;
