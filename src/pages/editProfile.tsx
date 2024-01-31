import { Link } from "react-router-dom"
import { MdOutlineNavigateNext } from "react-icons/md";
import FormCourt from "../components/form/editcourtform";
import { useMutation, useQuery } from "react-query";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useState } from "react";

const EditProfile = () => {
    const [loading, setLoading] = useState(false)

    const { data: dataProfile } = useQuery("getProfileCourt",api.getProfileCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    const mutation = useMutation(api.addCourt, {
        onSuccess: async () => {
            toast.success("Add berhasil");
            setLoading(false)
        },
        onError: (error: Error) => {
            console.log(error)
            toast.error(error.message);
            setLoading(false)
        }
    })

    const onHandleSave = (data: FormData) => {
        setLoading(true)
        mutation.mutate(data)
    }
    return(
        <div className="p-7 ">
            <div className="flex items-center space-x-1 font-medium text-base text-zinc-600">
                <Link to="/mycourt" className="hover:text-zinc-800 hover:underline hover:underline-offset-1">Court</Link>
                <MdOutlineNavigateNext className="text-xl" />
                <Link to="/mycourt/editprofile" className="hover:text-zinc-800 hover:underline hover:underline-offset-1" >Editcourt</Link>
            </div>
            <div className="content flex justify-center">
                <FormCourt onSave={onHandleSave} isLoading={loading} dataCourt={dataProfile}/>
            </div>
        </div>
    )
}

export default EditProfile