import styles from "./Menu.module.scss"
import MenuEntry from "./MenuEntry.tsx";
import {JSX} from "react";

interface MenuProps {
    isActive: boolean;
    closeMenu: () => void;
    children: JSX.Element;
}
export default function Menu({isActive, closeMenu}: MenuProps) {
    return <div className={`${styles.container} ${isActive ? styles.open : ""}`}>
        <ul className={styles.menuItems}>
            <li>
                <MenuEntry name="Home" closeMenu={closeMenu} />
            </li>
        </ul>
    </div>
}