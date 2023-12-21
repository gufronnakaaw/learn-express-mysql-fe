import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Home.jsx';
import Edit from './Edit.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
