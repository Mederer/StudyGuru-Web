import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import "./styles/globals.scss"
import "./styles/reset.scss"
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {Amplify} from "aws-amplify";
import awsConfig from "./aws-exports";
import {Authenticator} from "@aws-amplify/ui-react";

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: awsConfig.USER_POOL_ID,
            userPoolClientId: awsConfig.USER_POOL_APP_CLIENT_ID,
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Authenticator.Provider>
                    <App/>
                </Authenticator.Provider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
