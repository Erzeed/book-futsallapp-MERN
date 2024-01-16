import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Card = () => {
    const { pathname } =  useLocation();
    const [ locationPage, setLocationPage ] = useState<boolean | undefined>();
    const url = "https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720";

    useEffect(() => {
        setLocationPage(pathname.slice(1) == "search")
    }, [pathname])

    return(
        <div className={`${
            locationPage ? "flex h-52 border rounded-xl overflow-hidden" : "h-[360px]"
        } container`}>
            <div className={`${
                locationPage ? "h-full w-1/4" : "h-[75%] w-full shadow-md rounded-lg"
            } img relative overflow-hidden`}>
                <img className="h-full w-full bg-cover" src={url} alt="" />
                <div className="rounded-full p-2 bg-white absolute top-2 right-2 cursor-pointer">
                    <AiOutlineLike className="shadow-lg text-black text-base"/>
                </div>
            </div>
            <div className={`${
                locationPage ? "w-3/4 p-2" : "h-[25%] my-1 p-2 shadow-md border rounded-lg"
            } desc flex flex-col justify-between text-sm font-semibold`}>
                <div className="desc-wrap flex justify-between tracking-wide">
                    <p>Majenang, Cilacap</p>
                    <div className="rating space-x-2 flex items-center">
                        <FaStar />
                        <p>4.5</p>
                    </div>
                </div>
                <p className="w-fit px-2 h-5 text-xs  bg-green-100 rounded text-green-900">open</p>
                <p>Rp 200,00 hours</p>
            </div>
        </div>
    )
}

export default Card;