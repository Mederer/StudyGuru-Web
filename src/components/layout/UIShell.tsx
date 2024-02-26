import {Outlet} from "react-router-dom";
import styles from "./UIShell.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {useState} from "react";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import Menu from "../menu/Menu.tsx";

function UIShell() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    const handleCloseMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className={styles.appContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>StudyGuru</h1>
                <FontAwesomeIcon onClick={handleMenuClick} className={styles.icon} icon={menuOpen ? faXmark : faBars} size="2x" color="white" />
                <nav>
                    <Menu closeMenu={handleCloseMenu} isActive={menuOpen} />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                footer
            </footer>
        </div>
    )
}

export default UIShell;