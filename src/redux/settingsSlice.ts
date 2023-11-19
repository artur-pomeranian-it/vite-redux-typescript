import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsState {
  backgroundColor: 'dark' | 'light';
}

export const initialState: SettingsState = {
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
