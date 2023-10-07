import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Hooks/AuthProvider'

const Navbar = () => {

    const authContext = useContext(AuthContext)

    const { user, logOut } = authContext

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar bg-base-100 lg:px-10">
            <div className="navbar-start">
                <a className="normal-case text-xl">Education Events</a>
            </div>
            <div className="navbar-end hidden lg:flex">

                {
                    user
                        ?
                        (
                            <ul className='flex gap-5 items-center justify-center'>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                < li className="w-10 rounded-full" >
                                    <img className='w-10 h-full rounded-full' src={user.photoURL} />
                                </li >
                                <li>
                                    <p onClick={handleLogOut} className="flex mt-2 text-white bg-purple-500 border-0 py-2 px-3 rounded text-lg">LogOut</p>
                                </li>
                            </ul>
                        ) : (
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register"> Register </NavLink>
                                </li>
                            </ul>
                        )
                }


            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box right-2 w-24">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar