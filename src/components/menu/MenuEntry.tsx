import styles from "./MenuEntry.module.scss"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
interface MenuEntryProps {
    name: string;
    closeMenu: () => void;
    icon: IconDefinition
    link: string;
}
export default function MenuEntry({name, closeMenu, link, icon}: MenuEntryProps) {
    const handleClick = () => {
        closeMenu();
    }
    return <Link to={link} className={styles.menuEntry} onClick={handleClick}>
        <FontAwesomeIcon icon={icon} size={"2x"} />
        <span>{name}</span>
    </Link>
}