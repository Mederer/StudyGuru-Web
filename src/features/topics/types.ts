export type Topic = {
    id: string;
    name: string;
};

export type NewTopic = Omit<Topic, "id">;
