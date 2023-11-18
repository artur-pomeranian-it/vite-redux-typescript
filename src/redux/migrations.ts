import { MigrationManifest, PersistState } from 'redux-persist/es/types';
import { SettingsState } from './settingsSlice';

export type PersistsSliceState = SettingsState & {
  _persist: PersistState;
};

type PersistAppStateV0 = Omit<PersistsSliceState, 'backgroundColor'> & {
  backgroundColor: SettingsState['background'];
};

const migrations: MigrationManifest = {
  0: (state): PersistsSliceState | undefined => {
    // migration defines initial state
    const { ...rest } = state;
    return {
      ...rest,
      background: 'dark',
    };
  },
  1: (state): PersistsSliceState | undefined => {
    // migration defines initial state
    const { backgroundColor, ...rest } = state as PersistAppStateV0;
    return {
      ...rest,
      background: backgroundColor,
    };
  },
};

export default migrations;
