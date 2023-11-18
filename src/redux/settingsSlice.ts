import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsState {
  background: 'dark' | 'light';
}

const initialState: SettingsState = {
  background: 'light',
};

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    toggleBackgroundColor: (state) => {
      state.background = state.background === 'dark' ? 'light' : 'dark';
    },
  },
});
export const { toggleBackgroundColor } = settingsSlice.actions;
export const selectBackgroundColor = (state: RootState) =>
  state.settings.background;
export const settingsReducer = settingsSlice.reducer;
