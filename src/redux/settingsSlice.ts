import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SettingsState {
  backgroundColor: 'dark' | 'light';
}

const initialState: SettingsState = {
  backgroundColor: 'light',
};

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    toggleBackgroundColor: (state) => {
      state.backgroundColor =
        state.backgroundColor === 'dark' ? 'light' : 'dark';
    },
  },
});
export const { toggleBackgroundColor } = settingsSlice.actions;
export const selectBackgroundColor = (state: RootState) =>
  state.settings.backgroundColor;
export const settingsReducer = settingsSlice.reducer;
