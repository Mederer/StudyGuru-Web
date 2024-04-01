import { useAuth } from "react-oidc-context";

export default function HomeScreen() {
    const auth = useAuth();

    return (
        <div>
            <h1>Hi {auth.user?.profile.given_name ?? "there"}</h1>
            <p>Let's get studying!</p>
        </div>
    );
}
