import { Link } from "react-router-dom";

const Login = () => {

    return(
        <div className="flex justify-center items-center h-[calc(100vh-64px)] ">
            <div className="h-80 w-96 border border-zinc-300 rounded-xl shadow-md bg-white overflow-hidden flex flex-col justify-between">
                <div className="title w-full h-10 flex justify-center items-center border-b border-zinc-300 bg-zinc-50">
                    <p className="text-md font-semibold">Login</p>
                </div>
                <form className="px-4 flex flex-col justify-center">
                    <label htmlFor="email-address-icon" className="block mb-1 text-sm text-zinc-600">Email</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-zinc-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="name@gmail.com" />
                    </div>
                    <label htmlFor="email-address-icon" className="block mb-1 text-sm text-zinc-500">Password</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </div>
                        <input type="password" id="password" className="bg-gray-50 border border-zinc-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="password" />
                    </div>
                    <button className="w-full h-10 rounded-full border border-zinc-300 font-semibold text-sm bg-[#144FCC] text-white" type="button">Sign in</button>
                </form>
                <div className="title w-full h-10 flex items-end pb-4 pl-4">
                    <p className="text-xs">Don't have account ? <Link className=" text-blue-500" to="/register">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login