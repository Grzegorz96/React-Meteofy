import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { appRoutes } from './appRoutes';

/**
 * Router configuration for the application.
 *
 * @returns {Object} The created router object.
 */
export const router = createBrowserRouter(
  [
    {
      path: '',
      element: <MainLayout />,
      children: appRoutes,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
