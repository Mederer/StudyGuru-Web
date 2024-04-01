export type Topic = {
    id: string;
    name: string;
    colour: string;
};

export type CreateTopicRequest = Omit<Topic, "id">;
