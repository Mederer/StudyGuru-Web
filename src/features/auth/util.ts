import { User } from "oidc-client-ts";

export function getUser() {
    const oidcStorage = sessionStorage.getItem(
        "oidc.user:https://studyguruorg.b2clogin.com/studyguruorg.onmicrosoft.com/B2C_1_SignInSignUp/v2.0/:53f95087-8c02-4dbc-a3ed-18ba01e77a8f",
    );
    if (!oidcStorage) {
        return null;
    }

    return User.fromStorageString(oidcStorage);
}

export const signoutParams = {
    extraQueryParams: {
        post_logout_redirect_uri: "http://localhost:5173/",
    },
};
