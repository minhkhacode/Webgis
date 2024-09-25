import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
    value: 0,
};

export const geoJSONDataListSlice = createSlice({
    name: 'geoJSONDataSlice',
    initialState,
    reducers: {
        change: (state, action) => {
            return action.payload;
        },
    },
});

// Export các action được tự động tạo ra từ slice
export const { change } = geoJSONDataListSlice.actions;

// Export reducer của slice
export default geoJSONDataListSlice.reducer;
