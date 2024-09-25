import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';
import languageReducer from '../features/language/languageSlice.jsx';
import crsReducer from '../features/CRS/crsSlice.jsx';
import buttonReducer from '../features/button/buttonsStatusSlice.jsx';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer,
        CRS: crsReducer,
        button: buttonReducer,
    },
});

export default store;
