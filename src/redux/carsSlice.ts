import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./thunk";

const initialState = { cars: [] };

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCarsThunk.fulfilled, (state, { payload }) => {
                state.cars = payload
            })
    }
})


export const carsReducer = carsSlice.reducer;