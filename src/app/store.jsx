import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';
import geoJSONDataListReducer from '../features/counter/geoJSONDataListSlice/geoJSONDataListSlice.jsx';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        geoJSONDataList: geoJSONDataListReducer,
    },
});

export default store;
