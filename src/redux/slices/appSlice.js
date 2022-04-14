import { createSlice } from '@reduxjs/toolkit'
import { getDirectory } from '../asyncThunks/getDirectory';

const initialState = {
  pathHistory: [],
  fetchStatus: 'standby',
  mainFolder: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addPathToHistory: (state, action) => {
      state.pathHistory = [
        ...state.pathHistory,
        action.payload,
      ]
    },
    shortenHistoryPathByAmount: (state, action) => {
      state.pathHistory.splice(action.payload, state.pathHistory.length)
    },
  },
  extraReducers: {
    [getDirectory.pending]: (state) => {
      state.fetchStatus = 'pending';
    },
    [getDirectory.fulfilled]: (state, action) => {
      state.fetchStatus = 'fulfilled';
      state.mainFolder = action.payload;
    },
    [getDirectory.rejected]: (state) => {
      state.fetchStatus = 'rejected';
    },
  }
});

export const { addPathToHistory, shortenHistoryPathByAmount} = appSlice.actions; 