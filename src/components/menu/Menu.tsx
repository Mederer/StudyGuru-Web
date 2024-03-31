import styles from "./Menu.module.scss";
import MenuEntry from "./MenuEntry.tsx";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faSchool } from "@fortawesome/free-solid-svg-icons/faSchool";
import Spacer from "../common/Spacer.tsx";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { useAuth } from "react-oidc-context";
import { signoutParams } from "../../features/auth/util.ts";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
    isActive: boolean;
    closeMenu: () => void;
}
export default function Menu({ isActive, closeMenu }: MenuProps) {
    const auth = useAuth();

    const handleLogout = async () => {
        await auth.signoutRedirect({ ...signoutParams });
    };

    return (
        <div className={`${styles.menu} ${isActive ? styles.open : ""}`}>
            <ul className={styles.menuItems}>
                <li>
                    <MenuEntry
                        link={"/"}
                        name="Home"
                        closeMenu={closeMenu}
                        icon={faHouse}
                    />
                </li>
                <li>
                    <MenuEntry
                        name={"Flash Cards"}
                        closeMenu={closeMenu}
                        link={"/flashcards"}
                        icon={faSchool}
                    />
                    <li>
                        <MenuEntry
                            name={"Topics"}
                            closeMenu={closeMenu}
                            link={"/topics"}
                            icon={faPen}
                        />
                    </li>
                </li>
                <Spacer />
                <li>
                    <MenuEntry
                        type="button"
                        onClick={handleLogout}
                        name={"Logout"}
                        closeMenu={closeMenu}
                        link={"/"}
                        icon={faRightFromBracket}
                    />
                </li>
            </ul>
        </div>
    );
}
