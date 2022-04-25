import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { singInWithGoogle } = useFirebase()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const auth = getAuth(app)

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePassBlur = event => {
        setPass(event.target.value);
    }
    if (user) {
        navigate('/booking')
    }

    const handleFromSubmit = event => {
        event.preventDefault()
        if (email !== pass) {
            setError('set email as a password')
            return
        }
        createUserWithEmailAndPassword(email, pass)
    }
    return (
        <div className="login">
            <h3 className='text-4xl text-center text-success mt-5 mb-6'>Login Here</h3>
            <div className="w-80 mx-auto">
                <form onSubmit={handleFromSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input onBlur={handlePassBlur} className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>

                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <p className='text-danger'>{error}</p>
                    <div className="flex items-center justify-between">
                        <button className="hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded bg-cyan-500 shadow-lg shadow-cyan-500/50" type="submit">
                            Sign In
                        </button>
                        <button onClick={singInWithGoogle} className="inline-block bg-indigo-500 shadow-lg shadow-indigo-500/50 align-baseline font-bold text-sm text-white
                        py-2 px-4 rounded hover:bg-indigo-700" type='button'>
                            Google Sing In
                        </button>
                    </div>
                    <p className='mt-3'>New Here? <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/registration">Sing Up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;