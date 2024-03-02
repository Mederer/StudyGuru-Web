import styles from "./Menu.module.scss"
import MenuEntry from "./MenuEntry.tsx";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";
import Spacer from "../common/Spacer.tsx";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import {useAuthenticator} from "@aws-amplify/ui-react";

interface MenuProps {
    isActive: boolean;
    closeMenu: () => void;
}
export default function Menu({isActive, closeMenu}: MenuProps) {
    const {authStatus} = useAuthenticator(context => [context.authStatus]);
    return <div className={`${styles.menu} ${isActive ? styles.open : ""}`}>
        <ul className={styles.menuItems}>
            <li>
                <MenuEntry link={"/"} name="Home" closeMenu={closeMenu} icon={faHouse} />
            </li>
            <li>
                <MenuEntry name={"Flash Cards"} closeMenu={closeMenu} link={"/flashcards"} icon={faSchool} />
            </li>
            {authStatus === "authenticated" && <li>
                <MenuEntry name={"AI Quiz"} closeMenu={closeMenu} link={"/ai"} icon={faSchool} />
            </li>}
            <Spacer/>
            <li>
                <MenuEntry name={"Logout"} closeMenu={closeMenu} link={"/about"} icon={faRightFromBracket} />
            </li>
        </ul>
    </div>
}