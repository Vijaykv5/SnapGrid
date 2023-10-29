import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainSection from './MainSection';
import DocsPage from './Pages/DocsPage';
import HomePage from './Pages/HomePage';
import ShareImageModal from './components/menu/ShareImageModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/docs',
    element: <DocsPage />,
  },
  {
    path: '/search',
    element: <MainSection />,
    children: [
      {
        path: ':ImageId',
        element: <ShareImageModal />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
