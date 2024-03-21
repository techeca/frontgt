import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Register from './pages/Register/index.jsx';
import Login from './pages/Login/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import PageNotFound from './pages/PageNotFound/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
