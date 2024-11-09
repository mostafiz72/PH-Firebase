import React from 'react'
import { Link } from 'react-router-dom'

export default function 

() {
  return (
    <>
        <div className=' bg-gray-900 h-screen'>
          <div className=' max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center'>
            <div class=" w-full  border border-blue-500 py-8 px-5 rounded-lg">
              <h2 className=' font-bold text-blue-600 text-3xl text-center'>Register From</h2>
                <div class="mb-5">
                  <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your FullName</label>
                  <input type="text" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FullName" required />
                </div>
                <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
                </div>
                <div class="mb-5">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input placeholder='Password' type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                  <h3 className=' text-right text-white'>I have an account?<Link to="/login" className='text-blue-500 ml-2'>Login Here</Link></h3>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
              </div>
          </div>
        </div>
    </>
  )
}