import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk, getNextPageThunk } from "./thunk";
import { Car } from "../types/cars";

const initialState: { cars: Car[], error: null | string} = { cars: [], error: null };

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCarsThunk.fulfilled, (state, { payload }) => {
               if(payload) state.cars = payload
            })
            .addCase(getCarsThunk.rejected, (state, { payload }) => {
                state.cars = []
                state.error = payload as string
            })
            .addCase(getNextPageThunk.fulfilled, (state, { payload }) => {
               if(payload) state.cars = [...state.cars, ...payload]
            })
    }
})


export const carsReducer = carsSlice.reducer;