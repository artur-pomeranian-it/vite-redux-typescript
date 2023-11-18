import { createBrowserRouter } from 'react-router-dom';
import { Fallback } from './features/fallback/fallback.tsx';
import { Dashboard } from './layout/dashboard.tsx';
import { Cards } from './features/cards/cards.tsx';
import { Settings } from './features/settings/settings.tsx';
import { Agenda } from './layout/agenda.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/cards',
        element: <Cards />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/agenda',
        element: <Agenda />,
      },
      {
        path: '/',
        element: <Agenda />,
      },
    ],
  },
  {
    path: '*',
    element: <Fallback />,
  },
]);
