export interface FlashCard {
    id: string;
    question: string;
    answer: string;
}

export type CreateFlashCardRequest = Omit<FlashCard, "id">;