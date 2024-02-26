import {Route, Routes} from "react-router-dom";
import UIShell from "./components/layout/UIShell.tsx";
import HomeScreen from "./components/screens/HomeScreen.tsx";

function App() {
    return <Routes>
        <Route element={<UIShell />}>
            <Route path="/" element={<HomeScreen />} />
        </Route>
    </Routes>
}

export default App
