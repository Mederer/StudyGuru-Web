import styles from "./CreateFlashCardScreen.module.scss";
import BackButton from "../common/BackButton.tsx";
import CreateFlashCardForm from "../../features/flashcards/CreateFlashCardForm.tsx";

function CreateFlashCardScreen() {

    return <div>
        <div className={styles.topRow}>
            <BackButton extraStyles={{marginRight: "1rem"}} />
            <h1 className={styles.title}>Add New</h1>
        </div>
        <CreateFlashCardForm />
    </div>
}

export default CreateFlashCardScreen;