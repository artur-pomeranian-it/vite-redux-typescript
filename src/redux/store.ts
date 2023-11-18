import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import { SettingsState, settingsReducer } from './settingsSlice';
import migrations from './migrations';

const settingsConfig: PersistConfig<SettingsState> = {
  key: 'settings',
  storage,
  version: 1,
  // whitelist: ['count'],
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(settingsConfig, settingsReducer);
export const store = configureStore({
  reducer: {
    settings: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
