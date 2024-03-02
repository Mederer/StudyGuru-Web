import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import useAuth from "../../features/auth/useAuth.ts";

export default function HomeScreen() {
    const {firstName} = useAuth();
    return <Authenticator signUpAttributes={["given_name", "family_name", "birthdate"]}
    >
        {({signOut}) => (
            <div>
                <h1>Welcome, {firstName}</h1>
                <button onClick={signOut}>Sign out</button>
            </div>
        )}
    </Authenticator>
}