import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CloudUploadOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const SignUp = () => {
  const location = useLocation()
  const isSignUp = location.pathname === '/signup';

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="flex justify-center mb-20 mx-auto">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" /> */}
          </div>

          <div className="flex items-center justify-center mt-6">
            <Link to="/signin" className={`w-1/3 pb-4 font-medium text-center text-gray-900 capitalize`}>
              sign in
            </Link>

            <Link to="/signup" className={`w-1/3 pb-4 font-medium text-center text-gray-900 capitalize border-b-2 ${isSignUp ? 'border-blue-200' : 'border-transparent'}`}>
              sign up
            </Link>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <UserOutlined size={30} className='text-xl mx-3 text-gray-300 dark:text-gray-500' />
            </span>
            <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Username" />
          </div>

          {/* <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
          <CloudUploadOutlined size={30} className='text-xl mx-3 text-gray-300 dark:text-gray-500' />
            <h2 className="mx-3 text-gray-400">Profile Photo</h2>
            <input id="dropzone-file" type="file" className="hidden" />
          </label> */}

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <MailOutlined size={30} className='text-xl mx-3 text-gray-300 dark:text-gray-500' />
            </span>
            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
          </div>

          <div>
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <LockOutlined size={30} className="text-xl mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
              <span className="absolute right-3 cursor-pointer text-[18px]" onClick={togglePasswordVisibility}>
                {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <LockOutlined size={30} className="text-xl mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-200 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
              <span className="absolute right-3 cursor-pointer text-[18px]" onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
              </a>
            </div>
            <div className="mt-6 text-center ">
              <Link to='/entitysignup' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Signup as  a company
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default SignUp