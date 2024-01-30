import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { useQuery } from "react-query";
import api from "../utils/api";
import { useEffect, useRef, useState } from "react";


const MyCourt = () => {
    const [tableHeader, setTableHeader] = useState<string[]>()
    const reff = useRef<HTMLDivElement>(null)
    const imgReff = useRef<HTMLImageElement>(null)
    
    const { data: dataProfile } = useQuery("getProfileCourt",api.getProfileCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    useEffect(() => {
        onHandleListener()
        if(dataProfile){
            const ignoredKeys = ["_id", "userId", "__v", "imageUrl"];
            const arr = Object.keys(dataProfile)
            setTableHeader(arr.filter(item => !ignoredKeys.includes(item)))
        }
    },[dataProfile])

    const onZoom = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        if(imgReff.current) {
            imgReff.current.style.transformOrigin = `${x}px ${y}px`;
            imgReff.current.style.transform = "scale(1.5)";
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
            <div className="flex justify-between items-center">
                <h1 className="logo text-2xl">My Court</h1>
                <Link to="/mycourt/editprofile">
                    <AiOutlineForm className="text-2xl font-semibold" />
                </Link>
            </div>
            <div className="profile border relative rounded-lg mt-5">
                <div className="title text-sm font-medium absolute -top-2.5 left-3 text-zinc-600 bg-white px-2 tracking-wide">
                    <p>Profile</p>
                </div>
                <div className="detail py-6 px-5 text-sm grid lg:grid-cols-3">
                    <table className="w-full lg:col-span-2">
                        <tbody>
                            {
                                tableHeader?.map((item, index) => (
                                    <tr key={index} className="h-8">
                                        <th className="text-sm font-medium text-zinc-800 align-top text-left w-1/6 lg:w-1/4">{item}</th>
                                        {   //flter if data not facility and typeField
                                            item !== "facility" && item !== "typeField" ? (
                                                <td className="text-left w-5/6 lg:w-2/3">{`: ${dataProfile[item]}`}</td>
                                            ) : (
                                                //map array in facility and typeFeild and add style each value
                                                <td className="text-left w-5/6 lg:w-2/3">: {dataProfile[item].map(data => (
                                                    <span className="px-3 py-1 text-blue-800  bg-blue-100 rounded-full mr-1">{data}</span>
                                                ))}</td>
                                            )
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="detail w-full lg:col-span-1">
                            <div 
                                className="img h-64 w-2/3 rounded-lg overflow-hidden shadow-xl"
                                ref={reff}
                            >
                                <img ref={imgReff} className="w-full h-full cursor-crosshair duration-150" src={dataProfile?.imageUrl} alt="" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="list-field border relative rounded-lg mt-5">
                <div className="title text-sm font-medium absolute -top-2.5 left-3 text-zinc-600 bg-white px-2 tracking-wide">
                    <p>List Field</p>
                </div>
                <div className="list py-6 px-5">
                    <p>list</p>
                </div>
            </div>
        </div>
    )
}

export default MyCourt;