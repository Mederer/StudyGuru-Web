import { User } from "oidc-client-ts";

export function isColourDark(hex: string) {
    const r = parseInt(hex.slice(1, 3));
    const g = parseInt(hex.slice(3, 5));
    const b = parseInt(hex.slice(5, 7));

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
}

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
