import {Route, Routes} from "react-router-dom";
import UIShell from "./components/layout/UIShell.tsx";
import HomeScreen from "./components/screens/HomeScreen.tsx";
import NotFoundScreen from "./components/screens/NotFoundScreen.tsx";
import FlashCardScreen from "./components/screens/FlashCardScreen.tsx";
import CreateFlashCardScreen from "./components/screens/CreateFlashCardScreen.tsx";
import AIScreen from "./components/screens/AIScreen.tsx";
import {useAuth} from "react-oidc-context";
import SignUpScreen from "./components/screens/SignUpScreen.tsx";
import {ToastContainer} from "react-toastify";
import KanbanScreen from "./components/screens/KanbanScreen.tsx";

function App() {
    const auth = useAuth();

    return<>
        <Routes>
            <Route element={<UIShell />}>
                <Route path="/" element={auth.isAuthenticated ? <HomeScreen /> : <SignUpScreen/>} />
                <Route path="/flashcards" element={<FlashCardScreen />} />
                <Route path="/flashcards/create" element={<CreateFlashCardScreen />} />
                <Route path="/ai" element={<AIScreen />} />
                <Route path="/kanban" element={<KanbanScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Route>
        </Routes>
        <ToastContainer position="bottom-right" hideProgressBar={true} autoClose={1500} />
    </>
}

export default App
