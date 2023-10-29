import { configureStore } from '@reduxjs/toolkit';
import { persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import { persistClicksReducer } from './valueSlice'; 

export const store = configureStore({
    reducer: {
        clicks: persistClicksReducer,
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);