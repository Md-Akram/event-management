import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './Pages/Home.jsx'
import Services from './components/Services.jsx'
import ServiceDetails from './components/ServiceDetails.jsx'
import AuthProvider from './Hooks/AuthProvider.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Teams from './components/Teams.jsx'
import Testimonial from './components/Testimonial.jsx'
import "aos/dist/aos.css";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'singleService/:id',
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'team',
        element: <PrivateRoute><Teams /></PrivateRoute>
      },
      {
        path: 'testimonial',
        element: <PrivateRoute><Testimonial /></PrivateRoute>,

      }


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
