import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
    name: 'clicks',
    initialState: {value: 0},
    reducers: {
        update: (state, action) => {
            state.value += action.payload;
        },
    }
});

export const { update } = valueSlice.actions;