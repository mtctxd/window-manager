import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../slices/appSlice';

export const appStore = configureStore({
    reducer: appSlice.reducer,
});