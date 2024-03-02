import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import {studyguruApi} from "./services/studyguruApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        [studyguruApi.reducerPath]: studyguruApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(studyguruApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;