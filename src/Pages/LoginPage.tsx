import React from 'react'
import cam from '../components/assets/cam.png';
import { Link } from 'react-router-dom';
function LoginPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <section className="bg-gray-900 w-full h-max">
            <div className="flex sm:h-screen  xs:h-screen  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className='w-[4.5rem]' src={cam} alt='cam.png' />
                    SnapGrid
                </Link>
                <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 " placeholder="name@example.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white"> Password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                            w-full "
                                style={{
                                    background: 'linear-gradient(270deg, #6F4FF2 0%, #6F4FF2 100%)',
                                }}>Login</button>
                            <p className="text-sm font-light text-gray-400">
                                Don't Have account? <Link to="/signUp"
                                    className="font-medium hover:underline text-primary-500"
                                >

                                    SignUp

                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage