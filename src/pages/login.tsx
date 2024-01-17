import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import api from "../utils/api";
import { toast } from "react-toastify";

export type LoginType = {
    email: string,
    password: string
}

const Login = () => {
    const { register, 
            handleSubmit,
            formState: { errors }
        } = useForm< LoginType >()
    const queryClient = useQueryClient();

    const mutation = useMutation(api.Login, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken")
            toast.success("Login berhasil");
            navigate("/")
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    }) 
    const navigate = useNavigate()

        const onHandleSubmit = handleSubmit((data) => {
            mutation.mutate(data)
        })

    return(
        <div className="flex justify-center items-center h-[calc(100vh-64px)] ">
            <div className="h-80 w-96 border border-zinc-300 rounded-xl shadow-md bg-white overflow-hidden flex flex-col justify-between">
                <div className="title w-full h-10 flex justify-center items-center border-b border-zinc-300 bg-zinc-50">
                    <p className="text-md font-semibold">Login</p>
                </div>
                <form className="px-4 flex flex-col justify-center" onSubmit={onHandleSubmit}>
                    <label htmlFor="email-address-icon" className="block mb-1 text-sm text-zinc-600">Email</label>
                    <div className="relative mb-4">
                        <MdOutlineMail className="absolute w-4 h-5 top-3 left-3 text-zinc-500"/>
                        <input 
                            type="text" 
                            id="email-address-icon" 
                            className={`${
                                errors.email ? "border-red-500" : "border-zinc-300"
                            } bg-gray-50 border text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 `} 
                            placeholder="name@gmail.com" 
                            {...register("email", {required: "This field is required"})}
                            />
                        {errors.email && (
                                <span className="text-xs font-medium text-red-500 absolute right-2 bottom-3">{errors.email.message}</span>
                            )}
                    </div>
                    <label htmlFor="email-address-icon" className="block mb-1 text-sm text-zinc-500">Password</label>
                    <div className="relative mb-4">
                        <RiLockPasswordLine  className="absolute w-4 h-5 top-3 left-3 text-zinc-500" />
                        <input 
                            type="password" 
                            id="password" 
                            className={`${
                                errors.password ? "border-red-500" : "border-zinc-300"
                            } bg-gray-50 border text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 `}
                            placeholder="password" 
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 6,
                                    message: "Min 6 characters"
                                }
                            })}
                            />
                            {errors.password && (
                                <span className="text-xs font-medium text-red-500 absolute right-2 bottom-3">{errors.password.message}</span>
                            )}
                    </div>
                    <button className="w-full h-10 rounded-full border border-zinc-300 font-semibold text-sm bg-[#144FCC] text-white" type="submit">Sign in</button>
                </form>
                <div className="title w-full h-10 flex items-end pb-4 pl-4">
                    <p className="text-xs">Don't have account ? <Link className=" text-blue-500" to="/register">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login