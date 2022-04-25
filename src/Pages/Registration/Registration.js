import React from 'react';
import './Registration.css'

const Registration = () => {
    return (
        <div className='registration'>
            <h3 className='text-4xl text-center text-success mt-5 mb-5'>Registration Here</h3>
            <div className="w-80 mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <button className="hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded bg-cyan-500 shadow-lg shadow-cyan-500/50" type="submit">
                            Sign In
                        </button>
                        <button className="inline-block bg-indigo-500 shadow-lg shadow-indigo-500/50 align-baseline font-bold text-sm text-white
                        py-2 px-4 rounded hover:bg-indigo-700" type='button'>
                            Google Sing In
                        </button>
                    </div>
                    <p>Already Registered ?? <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;