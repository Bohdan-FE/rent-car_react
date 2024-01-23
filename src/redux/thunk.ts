import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../api/api";
import axios, { AxiosError } from "axios";


export const getCarsThunk = createAsyncThunk('cars/getCars', async (params: Params, thunkAPI) => {
    try {
        return await getCars(params, 12)
    }
    catch (error: AxiosError | unknown) {
        if (axios.isAxiosError(error)) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
})
