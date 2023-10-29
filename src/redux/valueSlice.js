import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
    name: 'clicks',
    initialValue: {value: 0},
    reducers: {
        update: (state) => {
            state.value += 1
        },
    }
});

export const { update } = valueSlice.actions;