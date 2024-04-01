import FlashCardList from "../../features/flashcards/FlashCardList.tsx";
import styles from "./FlashCardScreen.module.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import IconLinkButton from "../common/IconLinkButton.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    useGetAllFlashCardsQuery,
    useGetAllTopicsQuery,
} from "../../services/studyguruApi.ts";
import { withAuthenticationRequired } from "react-oidc-context";
import { useMemo, useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function FlashCardScreen() {
    const { data: flashCards, error, isLoading } = useGetAllFlashCardsQuery();
    const { data: topics, isLoading: topicsIsLoading } = useGetAllTopicsQuery();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [filter, setFilter] = useState("");
    const [selectedTopicId, setSelectedTopicId] = useState<string>("");

    let filteredFlashcards = useMemo(() => {
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

    filteredFlashcards = useMemo(() => {
        if (!filteredFlashcards || selectedTopicId === "") {
            return filteredFlashcards;
        }
        return filteredFlashcards.filter(
            (flashCard) => flashCard.topic.id === selectedTopicId,
        );
    }, [filteredFlashcards, selectedTopicId]);

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
                <div className={styles.filterSection}>
                    <label htmlFor="filter">Filter</label>
                    <input
                        name="filter"
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {topicsIsLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={styles.filterSection}>
                        <label htmlFor="selectedTopicId">Topic</label>
                        <select
                            name="selectedTopicId"
                            id="selectedTopicId"
                            value={selectedTopicId}
                            onChange={(e) => setSelectedTopicId(e.target.value)}
                        >
                            <option value="">All Topics</option>
                            {topics?.map((topic) => (
                                <option key={topic.id} value={topic.id}>
                                    {topic.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
            <FlashCardList flashCards={filteredFlashcards} />
        </div>
    );
}

export default withAuthenticationRequired(FlashCardScreen);
