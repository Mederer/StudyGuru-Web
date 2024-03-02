import {useSelector} from "react-redux";
import {RootState} from "../../store.ts";

export default function useAuth() {
    const userId = useSelector((state: RootState) => state.auth.userId);
    const firstName = useSelector((state: RootState) => state.auth.firstName);
    const lastName = useSelector((state: RootState) => state.auth.lastName);

    return {userId, firstName, lastName};
}