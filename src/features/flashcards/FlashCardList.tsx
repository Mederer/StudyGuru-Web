import {FlashCard} from "./types.ts";
import FlashCardCard from "./FlashCardCard.tsx";
import styles from "./FlashCardList.module.scss";

interface FlashCardListProps {
    flashCards: FlashCard[];
}
export default function FlashCardList({flashCards}: FlashCardListProps) {

    return <div className={styles.flashCardList}>
        {flashCards.map(card => <FlashCardCard key={card.id} flashCard={card} />)}
    </div>
}