import storage from 'redux-persist/lib/storage'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import { Car } from '../types/cars';

const initialState: { favoriteCars: [] | Car[]} = { favoriteCars: [] };

const favoriteCarsSlice = createSlice({
    name: 'favoriteCars',
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<Car>){
            state.favoriteCars = [...state.favoriteCars, action.payload]
        },
        removeFavorite(state, {payload} ){
            state.favoriteCars = state.favoriteCars.filter(favoriteCar => favoriteCar.id !== payload)
        }
    },
})

const persistConfig = {
  key: 'cars',
  storage,
}

export const {addToFavorite, removeFavorite} = favoriteCarsSlice.actions
export const carsReducer = favoriteCarsSlice.reducer;

export const persistedReducer = persistReducer(persistConfig, carsReducer)