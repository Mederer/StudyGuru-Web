import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
}

const initialState: AuthState = {
    userId: null,
    firstName: null,
    lastName: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        clearUser: (state) => {
            state.userId = null;
            state.firstName = null;
            state.lastName = null;
        }
    },
});

export const {clearUser, setUserId, setFirstName, setLastName} = authSlice.actions;
export default authSlice.reducer;