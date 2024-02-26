import styles from "./MenuEntry.module.scss"
interface MenuEntryProps {
    name: string;
    closeMenu: () => void;
}
export default function MenuEntry({name, closeMenu}: MenuEntryProps) {
    const handleClick = () => {
        closeMenu();
        console.log("Clicked on " + name);
    }
    return <div className={styles.menuEntry} onClick={handleClick}>{name}</div>
}