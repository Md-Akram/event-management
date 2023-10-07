import React, { useContext } from 'react'
import { AuthContext } from '../Hooks/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const authContext = useContext(AuthContext)

    const { user, loading } = authContext

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    } else if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/login' />
    }
}

export default PrivateRoute