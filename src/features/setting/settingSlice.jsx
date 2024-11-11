import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chartType: 'line',
    mapType: 'defaultMap',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setChartType: (state, action) => {
            state.chartType = action.payload;
        },
        setMapType: (state, action) => {
            state.mapType = action.payload;
        },
    },
});

export const { setChartType, setMapType } = settingsSlice.actions;
export default settingsSlice.reducer;
