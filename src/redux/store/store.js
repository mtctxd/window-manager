import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { directoryApi } from '../asyncThunks/getDirectory';
import { appSlice } from '../slices/appSlice';

const rootReducer = combineReducers({
    appSlice: appSlice.reducer,
    [directoryApi.reducerPath]: directoryApi.reducer,
});

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(directoryApi.middleware)
});