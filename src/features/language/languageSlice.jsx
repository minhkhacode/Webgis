import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
    status: 'vi',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        change: (state) => {
            return state;
        },
    },
});

// Export các action được tự động tạo ra từ slice
export const { change } = languageSlice.actions;

// Export reducer của slice
export default languageSlice.reducer;
