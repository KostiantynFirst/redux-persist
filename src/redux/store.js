import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'
import { persistClicksReducer } from './valueSlice'; 

export const store = configureStore({
    reducer: {
        clicks: persistClicksReducer,
    },
});

export const persistor = persistStore(store);