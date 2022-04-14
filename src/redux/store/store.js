import { configureStore } from '@reduxjs/toolkit';
import { appSLice } from '../slices/appSlice';

export const appStore = configureStore({
    reducer: appSLice.reducer,
});