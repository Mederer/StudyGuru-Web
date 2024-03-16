import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import "./styles/globals.scss"
import "./styles/reset.scss"
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {AuthProvider} from "react-oidc-context";
import "react-toastify/dist/ReactToastify.css";

const oidcConfig = {
    authority: "http://localhost:8080/realms/myrealm/",
    client_id: "StudyGuruWeb",
    redirect_uri: "http://localhost:5173/",
}

const onSignInCallback = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider {...oidcConfig} onSigninCallback={onSignInCallback}>
                    <App/>
                </AuthProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
