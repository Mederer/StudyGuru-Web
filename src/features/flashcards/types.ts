import { Topic } from "../topics/types.ts";

export interface FlashCard {
    id: string;
    question: string;
    answer: string;
    topic: Topic;
}

export interface NewFlashCard {
    question: string;
    answer: string;
    topicId: string;
}

// export type NewFlashCard = Omit<FlashCard, "id"> &
//     Omit<FlashCard, "topic"> & { topicId: string };
