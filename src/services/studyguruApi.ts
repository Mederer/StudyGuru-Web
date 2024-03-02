import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FlashCard} from "../features/flashcards/types.ts";

export const studyguruApi = createApi({
    reducerPath: 'studyguruApi',
    tagTypes: ['FlashCard'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5260/'}),
    endpoints: (builder) => ({
        getAllFlashCards: builder.query<FlashCard[], void>({
            query: () => 'flashcards',
            providesTags: ['FlashCard'],
        }),
        createFlashCard: builder.mutation<FlashCard, Partial<FlashCard>>({
            query: (body) => ({
                url: 'flashcards',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['FlashCard'],
        }),
        deleteFlashCard: builder.mutation<void, string>({
            query: (id) => ({
                url: `flashcards/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FlashCard'],
        }),
    })
});

export const {useDeleteFlashCardMutation, useGetAllFlashCardsQuery, useCreateFlashCardMutation} = studyguruApi;