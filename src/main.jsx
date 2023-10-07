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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'singleService/:id',
        element: <ServiceDetails />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
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
