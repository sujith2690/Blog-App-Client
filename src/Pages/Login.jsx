import React from 'react'

const Login = () => {
    return (
        <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-3xl mb-1 text-center">READERS</h1>
            <p className="text-lg font-normal text-gray-600 mb-7 text-center">Welcome...</p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
                <FaFingerprint className="mr-2 text-gray-500" />
                <input
                    className="pl-1 outline-none border-none"
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
                    className="pl-2 outline-none border-none"
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


            <button button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" >Login</button>

            <p className="text-xs text-center sm:px-6 dark:text-gray-400">{account === 'login' ? "Don't have an account ? " : "Already have an account ? "}
                <a rel="noopener noreferrer" className="text-sm no-underline dark:text-gray-800 cursor-pointer" onClick={() => toggleAccount()}>{account === 'login' ? 'Sign Up' : 'login'}</a>
            </p>
        </form >
    )
}

export default Login