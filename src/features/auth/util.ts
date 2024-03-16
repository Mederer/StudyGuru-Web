import {User} from "oidc-client-ts";

export function getUser() {
    const oidcStorage = sessionStorage.getItem("oidc.user:http://localhost:8080/realms/myrealm/:StudyGuruWeb")
    if (!oidcStorage) {
        return null;
    }

    return User.fromStorageString(oidcStorage);
}