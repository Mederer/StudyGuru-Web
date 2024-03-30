import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.scss";
import "./styles/reset.scss";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import "react-toastify/dist/ReactToastify.css";
import { AUTHORITY, CLIENT_ID, REDIRECT_URI } from "./constants.ts";

const oidcConfig: AuthProviderProps = {
    authority: AUTHORITY,
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
};

const onSignInCallback = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider
                    {...oidcConfig}
                    onSigninCallback={onSignInCallback}
                >
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
