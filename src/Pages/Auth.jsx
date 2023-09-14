import React, { useEffect, useState } from 'react'
import { FaBookReader, FaFingerprint, FaUnlock, FaUserAlt } from 'react-icons/fa';
import { useFormik } from 'formik'
import { loginSchema, signUpSchema } from '../../src/schemas';
import { logInApi, signUpApi } from '../API/AuthRequest.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { accessToken, userDetails } from '../Redux/Features/userSlice';

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [account, setAccount] = useState('login');
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });
    const toggleAccount = () => {
        setAccount(prevAccount => (prevAccount === 'login' ? 'signUp' : 'login'));
        setFormValues({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        });
    };
    const initialValues =
        account === 'login'
            ? { email: formValues.email, password: formValues.password }
            : formValues;

    const validationSchema = account === 'login' ? loginSchema : signUpSchema;

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, action) => {
            try {
                const user = account === 'login' ? await logInApi(values) : await signUpApi(values)
                console.log(user.data.User, '-----response')
                const login = user.data.success
                if (login) {
                    dispatch(userDetails(user.data.User));
                    dispatch(accessToken(user.data.Token));
                    localStorage.setItem("Token", user.data.Token);
                    localStorage.setItem("User", JSON.stringify(user.data.User));
                    navigate('/')
                }
            } catch (error) {
                console.log(error, 'Login failed');
            }
            console.log(account, 'before reset')
            action.resetForm()
        }
    })

    return (
        <div className="h-screen p-10 md:flex bg-black"
        // style={{backgroundImage:'url(https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
        >
            
            <div
                className="relative overflow-hidden md:flex w-1/2  i justify-around items-center hidden">
                {/* <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
            </div>
            <div className="flex md:w-1/2  justify-center items-center  py-10">
                <form onSubmit={handleSubmit} className="bg-gray-500 bg-opacity-50 w-full px-10 py-12 rounded-2xl ">
                    <h1 className="text-gray-200 font-bold text-3xl mb-1 text-center"> READERS</h1>
                    <p className="text-lg font-normal text-gray-600 mb-7 text-center">Welcome...</p>
                    {account === 'login' ? (
                        <>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
                                <FaFingerprint className="mr-2 text-gray-500" />
                                <input
                                    className="pl-1 outline-none border-none w-full bg-gray-500 bg-opacity-5"
                                    type="email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            {errors.email && touched.email ? (
                                <p className="text-red-600 text-center text-sm">{errors.email}</p>
                            ) : null}
                            <div className="flex items-center border-2 py-2 px-2 rounded-2xl">
                                <FaUnlock className="mr-2 text-gray-500" />
                                <input
                                    className="pl-2 outline-none border-none w-full bg-gray-500 bg-opacity-50"
                                    type="password"
                                    value={values.password || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            {errors.password && touched.password ? (
                                <p className="text-red-600 text-center text-sm">{errors.password}</p>
                            ) : null}
                        </>
                    ) : (
                        <>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
                                <FaUserAlt className="mr-2 text-gray-500" />
                                <input
                                    className="pl-1 outline-none border-none w-full bg-gray-500 bg-opacity-50"
                                    type="text"
                                    value={values.name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="name"
                                    id="name"
                                    placeholder="Username"
                                />
                            </div>
                            {errors.name && touched.name ? (
                                <p className="text-red-600 text-center text-sm">{errors.name}</p>
                            ) : null}
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
                                <FaFingerprint className="mr-2 text-gray-500" />
                                <input
                                    className="pl-1 outline-none border-none w-full bg-gray-500 bg-opacity-50"
                                    type="email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            {errors.email && touched.email ? (
                                <p className="text-red-600 text-center text-sm">{errors.email}</p>
                            ) : null}
                            <div className="flex items-center border-2 py-2 px-2 rounded-2xl">
                                <FaUnlock className="mr-2 text-gray-500" />
                                <input
                                    className="pl-2 outline-none border-none w-full bg-gray-500 bg-opacity-50"
                                    type="password"
                                    value={values.password || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            {errors.password && touched.password ? (
                                <p className="text-red-600 text-center text-sm">{errors.password}</p>
                            ) : null}
                            <div className="flex items-center border-2 py-2 px-2 rounded-2xl mt-2">
                                <FaUnlock className="mr-2 text-gray-500" />
                                <input
                                    className="pl-2 outline-none border-none w-full bg-gray-500 bg-opacity-50"
                                    type="password"
                                    value={values.confirmPassword || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <p className="text-red-600 text-center text-sm">{errors.confirmPassword}</p>
                            ) : null}
                        </>
                    )}

                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{account === 'login' ? 'Sign In' : 'Sign Up'}</button>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">{account === 'login' ? "Don't have an account ? " : "Already have an account ? "}
                        <a rel="noopener noreferrer" className="text-sm no-underline dark:text-gray-800 cursor-pointer" onClick={() => toggleAccount()}>{account === 'login' ? 'Sign Up' : 'login'}</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Auth