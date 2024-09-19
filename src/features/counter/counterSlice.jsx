import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Tự động tạo action và reducer để tăng giá trị
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // Giảm giá trị dựa trên payload
        },
    },
});

// Export các action được tự động tạo ra từ slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer của slice
export default counterSlice.reducer;
