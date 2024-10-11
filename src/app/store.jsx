import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';
import geoJSONDataListReducer from '../features/counter/geoJSONDataListSlice/geoJSONDataListSlice.jsx';
import languageReducer from '../features/language/languageSlice.jsx';
import crsReducer from '../features/CRS/crsSlice.jsx';
import buttonReducer from '../features/button/buttonsStatusSlice.jsx';
import layerReducer from '../features/test/testSlice.jsx';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        geoJSONDataList: geoJSONDataListReducer,
        language: languageReducer,
        CRS: crsReducer,
        button: buttonReducer,
        layer: layerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable the serializable state check
        }),
});

export default store;
