import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Theme } from '@radix-ui/themes';
import { persistor, store } from './redux/store.ts';
import { router } from './router.tsx';
import './main.scss';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme accentColor="orange">
          <RouterProvider router={router} />
        </Theme>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
