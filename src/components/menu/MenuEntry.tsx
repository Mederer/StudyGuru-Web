import styles from "./MenuEntry.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface MenuEntryProps {
    name: string;
    closeMenu: () => void;
    icon: IconDefinition;
    type?: "button" | "link";
    link?: string;
    onClick?: () => void;
}
export default function MenuEntry({
    name,
    closeMenu,
    link = "",
    icon,
    onClick,
    type = "link",
}: MenuEntryProps) {
    if (type === "button" && !onClick) {
        throw new Error("onClick is required for button type MenuEntry");
    }

    const handleClick = () => {
        closeMenu();
    };

    const navMenuEntry = () => (
        <Link to={link} className={styles.menuEntry} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} size={"2x"} />
            <span>{name}</span>
        </Link>
    );

    const buttonMenuEntry = () => (
        <div
            className={styles.menuEntry}
            onClick={() => {
                handleClick();
                onClick!();
            }}
        >
            <FontAwesomeIcon icon={icon} size={"2x"} />
            <span>{name}</span>
        </div>
    );

    return type === "link" ? navMenuEntry() : buttonMenuEntry();
}
