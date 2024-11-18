import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    startDate: null,
    endDate: null,
    modelName: null,
    area: null,
};

export const inputPredictionSlice = createSlice({
    name: 'inputPrediction',
    initialState,
    reducers: {
        submitInputPrediction: (state, action) => {
            console.log(action.payload);

            return { ...state, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        // builder.addCase;
    },
});

export const { submitInputPrediction } = inputPredictionSlice.actions;

export default inputPredictionSlice.reducer;
