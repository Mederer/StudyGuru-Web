import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styles from "./IconLinkButton.module.scss";

interface IconLinkButtonProps {
    to: string;
    icon: IconProp;
    size: "1x" | "2x" | "3x" | "4x" | "5x";
}

export default function IconLinkButton({to, icon, size}: IconLinkButtonProps) {
    return <Link to="/flashcards/create" className={styles.iconLinkButton}>
        <FontAwesomeIcon icon={icon} to={to} size={size} />
    </Link>
}