import React from 'react'
import cam from '../components/assets/cam.png';
import { Link } from 'react-router-dom';
function SignUpPage() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section class="bg-gray-900 w-full h-max">
            <div class="flex sm:h-screen  xs:h-screen  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className='w-[4.5rem]' src={cam} alt='cam.png' />
                    Flowbite
                </a>
                <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                            Create and account
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white">User Name</label>
                                <input type="text" name="userName" placeholder="User Name" class="bg-gray-50 sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 " required />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-white"> Password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                            w-full ">Create an account</button>
                            <p class="text-sm font-light text-gray-400">
                                Already have an account? <a href="#" class="font-medium hover:underline text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage