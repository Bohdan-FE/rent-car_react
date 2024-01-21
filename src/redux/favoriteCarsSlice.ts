import storage from 'redux-persist/lib/storage'
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'

const initialState = { favoriteCars: [] };

const favoriteCarsSlice = createSlice({
    name: 'favoriteCars',
    initialState,
    reducers: {
        addToFavorite(state, { payload }){
            state.favoriteCars.push(payload)
        },
        removeFavorite(state, {payload}){
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