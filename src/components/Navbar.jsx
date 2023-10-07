import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Hooks/AuthProvider'
import { Toaster } from 'react-hot-toast'

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
                                <li>
                                    <NavLink to="team">Team</NavLink>
                                </li>
                                <li>
                                    <NavLink to="testimonial">Testimonial</NavLink>
                                </li>
                                < li className="rounded-full" >
                                    <p>{user.email}</p>
                                </li >
                                < li className="rounded-full" >
                                    <p>{user.name ? user.name : 'user'}</p>
                                </li >
                                < li className="w-10 h-10 rounded-full" >
                                    <img className='w-full h-full rounded-full' src={user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICBNue4lK6L2HK4Gujo5gEZS3o3mdTxkjhcK8uTCX4g&s'} />
                                </li >
                                <li>
                                    <p onClick={handleLogOut} className="flex text-white bg-purple-500 border-0 py-2 px-3 rounded text-lg">LogOut</p>
                                </li>
                            </ul>
                        ) : (
                            <ul className='flex gap-5 items-center justify-center'>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="team">Team</NavLink>
                                </li>
                                <li>
                                    <NavLink to="testimonial">Testimonial</NavLink>
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

                <Toaster />
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