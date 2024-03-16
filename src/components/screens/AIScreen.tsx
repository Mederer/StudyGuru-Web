import styles from "./AiScreen.module.scss";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AIScreen() {
    return <div className={styles.aiScreen}>
        <h1>AI Quiz</h1>
        <p>Coming soon...</p>
        <button onClick={() => {
            toast("AI Quiz coming soon...");
        }}>Toast it</button>
    </div>
}