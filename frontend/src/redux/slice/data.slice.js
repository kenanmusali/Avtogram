import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {
        saveAllData: (state, action) => {
            return action.payload;
        },
    },
});

export const { saveAllData } = dataSlice.actions;
export default dataSlice.reducer;