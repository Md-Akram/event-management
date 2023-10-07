import React, { useContext, useState } from 'react'
import { AuthContext } from '../Hooks/AuthProvider'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const authContext = useContext(AuthContext)

    const { register } = authContext

    const handleRegistration = () => {
        register(email, password)
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Resiter</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Register to see the details of the educational events</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}

                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="passward" className="leading-7 text-sm text-gray-600">password</label>                         <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}

                                    id="passward"
                                    name="passward"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button onClick={handleRegistration} className="flex w-full justify-center text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg my-4">Register</button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register