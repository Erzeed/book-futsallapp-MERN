import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const { pathname } = useLocation()
    const [page, setPage] = useState<string>()

    useEffect(() => {
        setPage(pathname.slice(1))
    }, [pathname])

    if(page !== "login" && page !== "register") {
        return(
            <div className="flex justify-center items-center h-8 bg-[#144FCC] text-white text-xs font-semibold">
                <a className="hover:underline hover:underline-offset-4" href="https://github.com/Erzeed" target="_blank" rel="noopener noreferrer">
                    Made By Feizal Reza
                </a>
            </div>
        )
    }
}

 export default Footer;