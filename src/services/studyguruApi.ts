import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FlashCard } from "../features/flashcards/types.ts";
import { getUser } from "../features/auth/util.ts";
import { SERVER_URL } from "../constants.ts";
import { NewTopic, Topic } from "../features/topics/types.ts";

export const studyguruApi = createApi({
    reducerPath: "studyguruApi",
    tagTypes: ["FlashCard"],
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
            providesTags: ["FlashCard"],
        }),
        createFlashCard: builder.mutation<FlashCard, Partial<FlashCard>>({
            query: (body) => ({
                url: "flashcards",
                method: "POST",
                body,
            }),
            invalidatesTags: ["FlashCard"],
        }),
        deleteFlashCard: builder.mutation<void, string>({
            query: (id) => ({
                url: `flashcards/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["FlashCard"],
        }),
        createTopic: builder.mutation<Topic, NewTopic>({
            query: (body) => ({
                url: "topics",
                method: "POST",
                body,
            }),
        }),
        getAllTopics: builder.query<Topic[], void>({
            query: () => ({
                url: "topics",
            }),
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
