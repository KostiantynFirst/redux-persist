import { configureStore } from '@reduxjs/toolkit';
import {persistStore, persisiReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { valueSlice } from './valueSlice';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistClicksReducer = persisiReducer(persistConfig, valueSlice.reducer);

export const store = configureStore({
    reducer: {
        clicks: persistClicksReducer,
    },
});

export const persitor = persistStore(store);