import { createSlice } from "@reduxjs/toolkit";

const initialState: {params: Params} = { params: {page: 1} };

const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        changeParams(state, { payload }){
            state.params = { page: 1, ...payload }
        },
        changePage(state, { payload }){
            state.params.page = payload 
        }
    },
})


export const paramsReducer = paramsSlice.reducer;
export const { changeParams, changePage } = paramsSlice.actions