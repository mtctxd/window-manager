import { createSlice } from '@reduxjs/toolkit'
import { getDirectory } from '../asyncThunks/getDirectory';

const initialState = {
  value: 0,
  currentPath: '',
  pathHistory: [],
  fetchStatus: 'standby',
  mainFolder: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
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

export const { incremented, decremented } = appSlice.actions; 