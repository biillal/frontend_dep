import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls/userAdminApiCalls';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { user } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const hadnlerSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }))
        if (user) {
            navigate('/dashboard')
        }
    }
    return (
        <div className='flex justify-center w-[100%] items-center lg:bg-blue-900 h-screen '>
            <div class="lg:w-full max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#" onSubmit={hadnlerSubmit}>
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our dashboard</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    
                </form>
            </div>
        </div>


    )
}

export default Login
