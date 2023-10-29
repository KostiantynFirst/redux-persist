import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const valueSlice = createSlice({
    name: 'clicks',
    initialState: {value: 0},
    reducers: {
        update: (state, action) => {
            state.value += action.payload;
        },
    }
});

const persistConfig = {
    key: 'root',
    storage,
  }

export const persistClicksReducer = persistReducer(persistConfig, valueSlice.reducer);


export const { update } = valueSlice.actions;

export const getValue = (state) => state.clicks.value