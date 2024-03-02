import FlashCardList from "../../features/flashcards/FlashCardList.tsx";
import styles from "./FlashCardScreen.module.scss";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import IconLinkButton from "../common/IconLinkButton.tsx";
import {faGear} from "@fortawesome/free-solid-svg-icons/faGear";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useGetAllFlashCardsQuery} from "../../services/studyguruApi.ts";

export default function FlashCardScreen() {
    // const flashCards = [{
    //     id: "1",
    //     question: "What is the capital of France?",
    //     answer: "Paris"
    // }, {
    //     id: "2",
    //     question: "What is the capital of Germany?",
    //     answer: "Berlin"
    // }, {
    //     id: "3",
    //     question: "What is the capital of Spain?",
    //     answer: "Madrid"
    // }];

    const {data: flashCards, error, isLoading} = useGetAllFlashCardsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if(error) {
        return <div>Error: {error.toString()}</div>;
    }

    return <div className={styles.flashCardScreen}>
        <div className={styles.topRow}>
            <h1>Flash Cards</h1>
            <FontAwesomeIcon icon={faGear} />
            <IconLinkButton to="/flashcards/create" icon={faPlus} size="2x" />
        </div>
        <FlashCardList flashCards={flashCards!} />
    </div>
}