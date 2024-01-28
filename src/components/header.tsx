import { Link } from "react-router-dom";
import { useAppContext } from "../context/app-context";
import {  useMutation, useQueryClient } from "react-query";
import api from "../utils/api";
import { toast } from "react-toastify";

const Header = () => {
    const { isLoggin } = useAppContext();
    const queryClient = useQueryClient()
    
    const mutation = useMutation(api.SignOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken")
            toast.success("Sign out succes")
        },
        onError: (error: Error) => {
            toast.error(error.message)
        }
    })

    const onHandleSignOut = () => {
        mutation.mutate()
    }

    return(
        <div className="sticky top-0 z-50 flex w-full justify-between items-center h-16 bg-[#144FCC] px-7 text-white">
            <div className="logo font-bold text-3xl text-white">
                <Link to="/">
                    Ez.
                </Link>
            </div>
            <div className="nav w-30 space-x-4">
                { isLoggin ? (
                    <>
                        <Link className="text-xs hover:underline font-bold" to="/mycourt">
                            List my property
                        </Link>
                        <Link className="text-xs hover:underline font-bold" to="/admin">
                            My booking
                        </Link>
                        <button className="px-5 py-2 bg-white text-zinc-700 rounded-full shadow-md text-xs font-semibold" type="button" onClick={onHandleSignOut}>Sign Out</button>
                    </>
                ): (
                    <Link className="px-5 py-2 bg-white text-zinc-700 rounded-full shadow-md text-xs font-semibold" to="/login">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header;