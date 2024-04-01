import FlashCardList from "../../features/flashcards/FlashCardList.tsx";
import styles from "./FlashCardScreen.module.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import IconLinkButton from "../common/IconLinkButton.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAllFlashCardsQuery } from "../../services/studyguruApi.ts";
import { withAuthenticationRequired } from "react-oidc-context";
import { useMemo, useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function FlashCardScreen() {
    const { data: flashCards, error, isLoading } = useGetAllFlashCardsQuery();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [filter, setFilter] = useState("");

    const filteredFlashcards = useMemo(() => {
        if (!flashCards) {
            return [];
        }
        if (filter === "") {
            return flashCards;
        }
        return flashCards.filter((flashCard) =>
            flashCard.question.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [flashCards, filter]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.toString()}</div>;
    }

    const handleToggleSettingsDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={styles.flashCardScreen}>
            <div className={styles.topRow}>
                <h1>Flash Cards</h1>
                <div className={styles.btnContainer}>
                    <FontAwesomeIcon
                        icon={faFilter}
                        size="2x"
                        onClick={handleToggleSettingsDrawer}
                    />
                    <IconLinkButton
                        to="/flashcards/create"
                        icon={faPlus}
                        size="2x"
                    />
                </div>
            </div>
            <div
                className={`${styles.settingsDrawer} ${drawerOpen ? styles.open : ""}`}
            >
                <h2>Settings</h2>
                <label htmlFor="filter">Filter</label>
                <input
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <FlashCardList flashCards={filteredFlashcards} />
        </div>
    );
}

export default withAuthenticationRequired(FlashCardScreen);
