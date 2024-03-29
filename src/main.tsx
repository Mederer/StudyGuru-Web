import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import "./styles/globals.scss"
import "./styles/reset.scss"
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {AuthProvider, AuthProviderProps} from "react-oidc-context";
import "react-toastify/dist/ReactToastify.css";

const oidcConfig: AuthProviderProps = {
    authority: "https://studyguruorg.b2clogin.com/studyguruorg.onmicrosoft.com/B2C_1_SignInSignUp/v2.0/",
    client_id: "53f95087-8c02-4dbc-a3ed-18ba01e77a8f",
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
