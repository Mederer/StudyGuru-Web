import {FlashCard} from "./types.ts";
import styles from "./FlashCardCard.module.scss";
import {SyntheticEvent, useEffect, useState} from "react";
import {useDeleteFlashCardMutation} from "../../services/studyguruApi.ts";
import {toast} from "react-toastify";

interface FlashCardCardProps {
    flashCard: FlashCard
}

export default function FlashCardCard({flashCard}: FlashCardCardProps) {
    const [flipped, setFlipped] = useState(false);
    const [deleteFlashCard, {isSuccess, isError, reset}] = useDeleteFlashCardMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Flashcard deleted");
            reset();
        }
        if (isError) {
            toast.error("Could not delete flashcard");
        }
    }, [isError, isSuccess, reset]);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    const handleDelete = (e: SyntheticEvent) => {
        e.stopPropagation();
        deleteFlashCard(flashCard.id);
    }

    const handleRight = () => {
        alert("Nice")
    }

    return <div onClick={handleFlip} className={`${styles.flashCardCard} ${flipped && styles.flipped}`}>
        <div className={`${styles.cardSide} ${styles.front} ${flipped && styles.flipped}`}>{flashCard.question}</div>

        <div className={`${styles.cardSide} ${styles.back} ${flipped && styles.flipped}`}>
            <div>

            </div>
            <div>
                {flashCard.answer}
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleRight}>Right</button>
                <button>Wrong</button>
            </div>
        </div>
    </div>
}