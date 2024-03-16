import {configureStore} from "@reduxjs/toolkit";
import kanbanReducer from "./features/kanban/kanbanSlice.ts";
import {studyguruApi} from "./services/studyguruApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        kanban: kanbanReducer,
        [studyguruApi.reducerPath]: studyguruApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(studyguruApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;