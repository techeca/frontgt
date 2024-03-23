import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Register from './pages/Register/index.jsx';
import Login from './pages/Login/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import PageNotFound from './pages/PageNotFound/index.jsx';
import Users from './pages/Users/index.jsx';
import Calendar from './pages/Calendar/index.jsx';
import UserProfile from './pages/UserProfile/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path:'dashboard',
        element: <Dashboard />
      },
      {
        path:'users',
        element: <Users />
      },
      {
        path:'calendar',
        element: <Calendar />
      },
      {
        path:'profile',
        element: <UserProfile />
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
