import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
import { carsReducer } from './carsSlice';
import { useDispatch } from 'react-redux'
import { persistedReducer } from "./favoriteCarsSlice";


export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favoriteCars: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const persistor = persistStore(store)