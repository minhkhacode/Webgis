import { createSlice } from '@reduxjs/toolkit';
import { fetchLayerGeoJson, fetchNNGeoJson } from '../../app/action';

const layerSlice = createSlice({
    name: 'layer',
    initialState: {
        layer: [],
        compareLayer: {
            NN: null,
            PNN: null,
            TQ: null,
        },
        loading: false,
        error: null,
    },
    reducers: {
        toggleTQ: (state, action) => {
            // Không cần gán loading ở đây
            if (state.compareLayer.TQ !== null) {
                state.compareLayer.TQ = null;
            } else {
                state.compareLayer.TQ = action.payload;
            }
        },
        toggleNN: (state, action) => {
            // Không cần gán loading ở đây
            if (state.compareLayer.NN !== null) {
                state.compareLayer.NN = null;
            } else {
                state.compareLayer.NN = action.payload;
            }
        },
        togglePNN: (state, action) => {
            // Không cần gán loading ở đây
            if (state.compareLayer.PNN !== null) {
                state.compareLayer.PNN = null;
            } else {
                state.compareLayer.PNN = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLayerGeoJson.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLayerGeoJson.fulfilled, (state, action) => {
                state.loading = false;
                state.layer = action.payload;
            })
            .addCase(fetchLayerGeoJson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchNNGeoJson.pending, (state) => {
                // Sửa 'addcase' thành 'addCase'
                state.loading = true;
            })
            .addCase(fetchNNGeoJson.fulfilled, (state, action) => {
                state.loading = false;
                state.layer = action.payload;
            })
            .addCase(fetchNNGeoJson.rejected, (state, action) => {
                // Thêm phần xử lý lỗi cho fetchNNGeoJson
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { toggleTQ, toggleNN, togglePNN } = layerSlice.actions;

export default layerSlice.reducer;
