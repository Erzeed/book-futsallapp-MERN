import { Link } from "react-router-dom"
import { MdOutlineNavigateNext } from "react-icons/md";
import FormCourt from "../components/form/editcourtform";

const EditProfile = () => {
    return(
        <div className="p-7 ">
            <div className="flex items-center space-x-1 font-medium text-base text-zinc-600">
                <Link to="/mycourt" className="hover:text-zinc-800 hover:underline hover:underline-offset-1">Court</Link>
                <MdOutlineNavigateNext className="text-xl" />
                <Link to="/mycourt/editprofile" className="hover:text-zinc-800 hover:underline hover:underline-offset-1" >Editcourt</Link>
            </div>
            <div className="content flex justify-center">
                <FormCourt />
            </div>
        </div>
    )
}

export default EditProfile