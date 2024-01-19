import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../api/api";

export const getCarsThunk = createAsyncThunk('cars/getCars', async (_, thunkAPI) => {
    try {
        return await getCars()
    }
    catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
