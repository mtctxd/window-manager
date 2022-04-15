import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPath: '',
  pathHistory: [],
  fetchStatus: 'standby',
  mainFolder: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addPathToHistory: (state, action) => {
      state.pathHistory = [...state.pathHistory, action.payload];
    },
    shortenHistoryPathByAmount: (state, action) => {
      state.pathHistory
        .splice(action.payload, state.pathHistory.length);
    },
    changeCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const {
  addPathToHistory,
  shortenHistoryPathByAmount,
  changeCurrentPath,
} = appSlice.actions;
