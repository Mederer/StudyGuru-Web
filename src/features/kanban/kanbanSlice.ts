import {createSlice} from "@reduxjs/toolkit";

export type kanbanItem = {
    id: number;
    title: string;
    stage: string;
}

export interface KanbanState {
    items: kanbanItem[]
}

const initialState: KanbanState = {
    items: [
        {id: 1, title: "First item", stage: "Backlog"},
        {id: 2, title: "Second item", stage: "Todo"},
        {id: 3, title: "Third item", stage: "In Progress"},
        {id: 4, title: "Fourth item", stage: "Done"},
    ]
};

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        moveItem: (state, action) => {
            const {id, stage} = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.stage = stage;
            }
        }
    }
});

export const {moveItem} = kanbanSlice.actions;
export default kanbanSlice.reducer;