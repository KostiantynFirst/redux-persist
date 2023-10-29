import { configureStore } from '@reduxjs/toolkit';
import { valueSlice } from './valueSlice';

export const store = configureStore({
    reducer: {
        clicks: valueSlice.reducer,
    },
})