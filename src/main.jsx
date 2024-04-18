import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import {Register, Login, Dashboard, PageNotFound, Users, Calendar, UserProfile, Inventory, Clients, Patients} from './pages/index.jsx';
import { userService } from './services/user.service.jsx';

const userIsLoggedIn = async () => {
  const user = localStorage.getItem('user')
  if(user){
    return redirect('/dashboard')
  }
  return null
}

const loginAction = async ({ /*params,*/ request}) => {
  let fm = await request.formData()
  const user = await userService.login(fm.get('correo'), fm.get('contrasena'))
  if(user !== null){
    return redirect('/dashboard'); 
  }else{
    return null
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    loader: async () => {
      const user = localStorage.getItem('user')
      if(!user) {
        return redirect('/login')
      }
      return null
    },
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
      },
      {
        path:'inventory',
        element: <Inventory />
      },
      {
        path:'clients',
        element: <Clients />
      },
      {
        path:'patients',
        element: <Patients />
      }
    ]
  },
  {
    path: `/register`,
    element: <Register />,
    loader: userIsLoggedIn,
  },
  {
    path: `/login`,
    element: <Login />,
    loader: userIsLoggedIn,
    action: loginAction,
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
