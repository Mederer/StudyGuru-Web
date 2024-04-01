import { useAuth } from "react-oidc-context";
import styles from "./SignUpScreen.module.scss";

export function SignUpScreen() {
    const auth = useAuth();

    return (
        <div className={styles.signUpScreen}>
            <h1 className={styles.title}>Welcome to StudyGuru</h1>
            <p>Your own study assistant. Sign up for free and get started.</p>
            <button
                className={styles.signUpButton}
                onClick={() => auth.signinRedirect()}
            >
                Login / Signup
            </button>
        </div>
    );
}

export default SignUpScreen;
