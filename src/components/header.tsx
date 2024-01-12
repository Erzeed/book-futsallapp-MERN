import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="sticky top-0 z-50 flex w-full justify-between items-center h-16 bg-[#88304E] px-7 text-white">
            <div className="logo font-bold text-3xl text-white">
                <Link to="/">
                    Ez.
                </Link>
            </div>
            <div className="nav w-30 space-x-4">
                <Link className="text-xs hover:underline font-bold" to="/admin">
                    List your property
                </Link>
                <Link className="px-5 py-2 bg-white text-zinc-700 rounded-full shadow-md text-sm font-semibold" to="/login">
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default Header;