import { Link, Outlet } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";

const MyCourt = () => {
    return(
    <div className="px-7 py-4">
        <div className="flex justify-between items-center">
            <h1 className="logo text-2xl">My Court</h1>
            <Link to="/mycourt/editprofile">
                <AiOutlineForm className="text-2xl font-semibold" />
            </Link>
        </div>
        <Outlet/>
    </div>
    )
}

export default MyCourt;