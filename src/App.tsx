import {Route, Routes} from "react-router-dom";
import UIShell from "./components/layout/UIShell.tsx";
import HomeScreen from "./components/screens/HomeScreen.tsx";
import NotFoundScreen from "./components/screens/NotFoundScreen.tsx";
import FlashCardScreen from "./components/screens/FlashCardScreen.tsx";
import CreateFlashCardScreen from "./components/screens/CreateFlashCardScreen.tsx";
import AIScreen from "./components/screens/AIScreen.tsx";
import { Hub } from "aws-amplify/utils";
import {useDispatch} from "react-redux";
import {fetchUserAttributes} from "aws-amplify/auth";
import {clearUser, setFirstName, setLastName, setUserId} from "./features/auth/authSlice.ts";
import {useEffect} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";

function App() {
    const dispatch = useDispatch();
    const {authStatus} = useAuthenticator(context => [context.authStatus])

    Hub.listen("auth", (data) => {
        const {payload} = data;
        switch (payload.event) {
            case "signedIn":
                fetchUserAttributes().then(attributes => {
                    dispatch(setUserId(attributes.sub!));
                    dispatch(setFirstName(attributes.given_name!));
                    dispatch(setLastName(attributes.family_name!));
                });
                break;
            case "signedOut":
                dispatch(clearUser());
                break;
        }
    });

    useEffect(() => {
        if (authStatus === "authenticated") {
            fetchUserAttributes().then(attributes => {
                dispatch(setUserId(attributes.sub!));
                dispatch(setFirstName(attributes.given_name!));
                dispatch(setLastName(attributes.family_name!));
            });
        }
    }, [dispatch, authStatus]);

    return <Routes>
        <Route element={<UIShell />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/flashcards" element={<FlashCardScreen />} />
            <Route path="/flashcards/create" element={<CreateFlashCardScreen />} />
            <Route path="/ai" element={<AIScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Route>
    </Routes>
}

export default App
