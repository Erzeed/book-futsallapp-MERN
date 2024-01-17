import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { RiUser4Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api";

export type RegisterType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmpassword: string,
    agreetandc: boolean
}

const Register = () => {
    const { 
            register, 
            watch, 
            handleSubmit,
            formState: { errors }
        } = useForm< RegisterType >();
    
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const mutation = useMutation(api.Register, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken")
            toast.success("Registrasi berhasil");
            navigate("/")
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    })

    const onhandleSubmit = handleSubmit((data) => {
        mutation.mutate(data)
    })
    
    return(
        <div className="flex justify-center items-center h-[calc(100vh-64px)] ">
            <div className="min-h-[70dvh] w-[420px] border border-zinc-300 rounded-xl shadow-md bg-white overflow-hidden flex flex-col justify-between">
                <div className="title w-full h-10 flex justify-center items-center border-b border-zinc-300 bg-zinc-50">
                    <p className="text-md font-semibold">Register</p>
                </div>
                <form className="px-4 space-y-5 flex flex-col justify-center" onSubmit={onhandleSubmit}>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <LuUser className="w-4 h-5 text-gray-700" />
                            </div>
                            <input 
                                type="text" 
                                id="firtsname" 
                                className={`${
                                        errors.firstName ? "border-red-500" : "border-zinc-300"
                                    } bg-gray-50 border text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 `} 
                                placeholder="firstname"
                                {...register("firstName", { required: "This field is required" })} 
                                ></input>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <RiUser4Line className="w-4 h-5 text-gray-700" />
                            </div>
                            <input 
                                type="text" 
                                id="lastname" 
                                className={`${
                                    errors.lastName ? "border-red-500" : "border-zinc-300"
                                } bg-gray-50 border text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`} 
                                placeholder="lastname"
                                {...register("lastName", { required: "This field is required" })}
                                />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <MdOutlineMail className="w-4 h-5 text-gray-700"/>
                        </div>
                        <input 
                            type="text" 
                            id="email" 
                            className={`${
                                errors.email ? "border-red-500" : "border-zinc-300"
                            } bg-gray-50 border text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`} 
                            placeholder="name@gmail.com" 
                            {...register("email", { required: "This field is required" })}
                            />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <RiLockPasswordLine className="w-4 h-4 text-gray-700"/>
                        </div>
                        <input 
                            type="password" 
                            id="password" 
                            className={`${
                                errors.password ? "border-red-500" : "border-zinc-300"
                            } bg-gray-50 border  text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`} 
                            placeholder="password" 
                            {...register("password", { 
                                required: "This field is required",
                                minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                                },
                             })}
                            />
                            {errors.password && (
                                <span className="text-xs font-medium text-red-500 absolute right-2 bottom-3">{errors.password.message}</span>
                            )}
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <RiLockPasswordLine className="w-4 h-4 text-gray-700"/>
                        </div>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            className={`${
                                errors.password ? "border-red-500" : "border-zinc-300"
                            } bg-gray-50 border  text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`}
                            placeholder="repeat password" 
                            {...register("confirmpassword", { 
                                validate: (val) => {
                                    if(!val){
                                        return "This field required"
                                    } else if(watch("password") !== val) {
                                        return "password not match"
                                    }
                                }
                             })}
                            />
                            {errors.confirmpassword && (
                                <span className="text-xs font-medium text-red-500 absolute right-2 bottom-3">{errors.confirmpassword.message}</span>
                            )}
                    </div>
                    <div className="checkbox">
                        <div className="flex">
                            <input 
                                id="checkbox" 
                                type="checkbox"
                                className="w-3 h-3 text-blue-600 bg-gray-10 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                {...register("agreetandc", { required: "This field is required" })}
                                />
                            <label htmlFor="checkbox" className="ms-2 text-xs font-medium text-zinc-700">I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>
                        {errors.agreetandc && (
                                <span className="text-xs font-medium text-red-500">{errors.agreetandc.message}</span>
                            )}
                    </div>
                    <button className="w-full h-10 rounded-full border border-zinc-300 font-semibold text-sm bg-[#144FCC] text-white" type="submit">Sign up</button>
                </form>
                <div className="title w-full h-10 flex items-end pb-4 pl-4">
                    <p className="text-xs">Have account ? <Link className=" text-blue-600 hover:underline dark:text-blue-500" to="/login">Login Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register;