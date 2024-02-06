import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import NavImgBtn from "./navImageBtn";

type typeDataCourt = {
    city: string
    description: string,
    name: string,
    pricePerHours: string,
    typeFields: string[],
    imageUrl: string[],
}

const Card = ({ city, description, name, pricePerHours, typeFields, imageUrl}: typeDataCourt) => {
    const [navImage, setNavImage] = useState(0)
    const { pathname } =  useLocation();
    const [ locationPage, setLocationPage ] = useState<boolean | undefined>();

    useEffect(() => {
        setLocationPage(pathname.slice(1) == "search")
    }, [pathname])

    const onHandleNavImage = (type: string) => {
        if(type == "NEX") {
            setNavImage(prev => prev + 1)
        } else if(type == "PREV") {
            setNavImage(prev => prev - 1)
        }
    }

    return(
        <div className={`${
            locationPage ? "h-72 w-1/4" : "h-[360px]"
        }`}>
            <div className={`${
                locationPage ? "h-[70%] rounded" : "h-[75%] rounded-lg"
            } img relative overflow-hidden group w-full`}>
                <img className="h-full w-full bg-cover" src={imageUrl[navImage]} alt="" />
                <div className="rounded-full p-2 bg-white absolute top-2 right-2 cursor-pointer scale-0 group-hover:scale-100 duration-200">
                    <AiOutlineLike className="shadow-lg text-black text-base"/>
                </div>
                <NavImgBtn 
                    navImage={navImage}
                    imgLength={imageUrl.length - 1} 
                    onClickPrev={() => onHandleNavImage("PREV")}
                    onClickNext={() => onHandleNavImage("NEX")}
                />
                <div className="absolute bottom-1 right-2 flex space-x-1">
                    {typeFields?.map((item, index) => (
                        <p key={index} className="py-1 px-2 bg-[rgba(0,0,0,.3)] text-white text-[10px] font-semibold rounded-full">{item}</p>
                    ))}
                </div>
            </div>
            <div className={`${
                locationPage ? "h-[30%]" : "h-[25%]"
            } desc flex flex-col justify-between my-2`}>
                <div className="flex justify-between tracking-wide text-sm font-semibold">
                    <h1 className="hover:underline hover:underline-offset-2 cursor-pointer">{name}</h1>
                    <div className="rating space-x-2 flex items-center">
                        <FaStar />
                        <p>4.5</p>
                    </div>
                </div>
                <div className="desc h-20 text-wrap truncate flex flex-col justify-center">
                    <p className="text-xs font-normal text-gray-800 leading-5 tracking-wide">{description}</p>
                </div>
                <div className={`${
                    locationPage ? "text-xs space-x-1" : "text-sm space-x-2"
                } flex font-normal text-gray-800`}>
                    <p>{`${pricePerHours} jam`}</p>
                    <p>.</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;