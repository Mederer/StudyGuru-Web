import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FlashCard, NewFlashCard } from "../features/flashcards/types.ts";
import { getUser } from "../features/auth/util.ts";
import { SERVER_URL } from "../constants.ts";
import { NewTopic, Topic } from "../features/topics/types.ts";

const TAGS = {
    FlashCard: "FlashCard",
    Topics: "Topics",
};

export const studyguruApi = createApi({
    reducerPath: "studyguruApi",
    tagTypes: [TAGS.FlashCard, TAGS.Topics],
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers) => {
            const token = getUser()?.id_token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllFlashCards: builder.query<FlashCard[], void>({
            query: () => ({
                url: "flashcards",
            }),
            providesTags: [TAGS.FlashCard],
        }),
        createFlashCard: builder.mutation<FlashCard, NewFlashCard>({
            query: (body) => ({
                url: "flashcards",
                method: "POST",
                body,
            }),
            invalidatesTags: [TAGS.FlashCard],
        }),
        deleteFlashCard: builder.mutation<void, string>({
            query: (id) => ({
                url: `flashcards/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [TAGS.FlashCard],
        }),
        createTopic: builder.mutation<Topic, NewTopic>({
            query: (body) => ({
                url: "topics",
                method: "POST",
                body,
            }),
            invalidatesTags: [TAGS.Topics],
        }),
        getAllTopics: builder.query<Topic[], void>({
            query: () => ({
                url: "topics",
            }),
            providesTags: [TAGS.Topics],
        }),
    }),
});

export const {
    useDeleteFlashCardMutation,
    useGetAllFlashCardsQuery,
    useCreateFlashCardMutation,
    useCreateTopicMutation,
    useGetAllTopicsQuery,
} = studyguruApi;
