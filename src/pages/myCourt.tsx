import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { useQuery } from "react-query";
import api from "../utils/api";
import { useEffect, useRef } from "react";
import Table from "../components/table";


const MyCourt = () => {
    const reff = useRef<HTMLDivElement>(null)
    const imgReff = useRef<HTMLImageElement>(null)
    
    const { data: dataProfile } = useQuery("getProfileCourt",api.getProfileCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    useEffect(() => {
        onHandleListener()
    },[])

    const onZoom = (e: MouseEvent) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        if(imgReff.current) {
            imgReff.current.style.transformOrigin = `${x}px ${y}px`;
            imgReff.current.style.transform = "scale(2)";
        }
    }

    const offZoom = () => {
        if(imgReff.current) {
            imgReff.current.style.transformOrigin = `center center`;
            imgReff.current.style.transform = "scale(1)";
        }
    }
    
    const onHandleListener = () => {
        if(reff.current) {
            reff.current.addEventListener("mousemove", onZoom)
            reff.current.addEventListener("mouseover", onZoom)
            reff.current.addEventListener("mouseleave", offZoom)
        }
    }

    return(
        <div className="px-7 py-4">
            <div className="flex justify-end items-center">
                <Link to="/mycourt/editprofile">
                    <AiOutlineForm className="text-2xl font-semibold" />
                </Link>
            </div>
            <div className="profile border relative rounded-lg mt-5">
                <div className="title logo text-base font-medium absolute -top-2.5 left-3 bg-white px-2 tracking-wide">
                    <p>Profile</p>
                </div>
                <div className="detail py-6 px-5 text-sm grid lg:grid-cols-3">
                    <Table {...dataProfile}/>
                    <div className="detail w-full lg:col-span-1 mt-5 lg:mt-0 flex justify-center">
                            <div 
                                className="img h-64 w-full sm:w-1/2 lg:w-3/4 rounded-lg overflow-hidden shadow-xl bg-contain"
                                ref={reff}
                            >
                                <img ref={imgReff} className="w-full h-full cursor-crosshair duration-150" src={dataProfile?.imageUrl} alt="" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="list-field mt-5">
                <div className="title logo text-base font-medium bg-white px-2 tracking-wide">
                    <p>List Lapangan</p>
                </div>
                <div className="list flex mt-3">
                    <div className="card-list w-36 h-36 border-dotted border-4 rounded-lg flex justify-center items-center">
                        <p className="text-sm font-medium">Add Field</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourt;