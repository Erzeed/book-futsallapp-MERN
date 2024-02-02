import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import Table from "../components/table";
import api from "../utils/api";
import FormField from "../components/form/addFieldForm/formField";


const MyCourt = () => {
    const [isOpen, setIsOpen] = useState(false)
    const reff = useRef<HTMLDivElement>(null)
    const imgReff = useRef<HTMLImageElement>(null)
    
    const { data: dataProfile } = useQuery("getProfileCourt",api.getProfileCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    const onHandleToggleForm = () => {
        isOpen ? setIsOpen(false): setIsOpen(true)
    }

    useEffect(() => {
        onHandleListener()
    },[])

    const onZoom = (e: MouseEvent) => {
        const target = e.target as HTMLTextAreaElement;
        const x = e.clientX - target.offsetLeft;
        const y = e.clientY - target.offsetTop;
    
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
        <div className="px-7 h-[calc(100vh-95px)]">
            <div className="flex justify-end items-center pt-5">
                <Link to="/mycourt/editprofile">
                    <AiOutlineForm className="text-2xl" />
                </Link>
            </div>
            <div className="profile border relative rounded-lg mt-5">
                <div className="title logo text-lg font-medium absolute -top-2.5 left-3 bg-white px-2 tracking-wide">
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
                <div className="title logo flex justify-between items-center text-lg font-medium bg-white px-2 tracking-wide">
                    <p>List Lapangan</p>
                    <button onClick={onHandleToggleForm}>
                        <HiOutlineViewGridAdd className="text-2xl" />
                    </button>
                </div>
                <div className="list mt-3 border rounded-lg overflow-hidden">
                    {/* <div className="card-list px-5 py-1 border-dashed border-2 rounded-md text-zinc-500 flex justify-center items-center">
                        <p className="text-xs font-medium">Belum ditambahkan</p>
                    </div> */}
                    <table className="w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-zinc-100 text-sm font-medium text-gray-700 uppercase tracking-wide h-8">
                                <th className="font-semibold w-28">Nomor</th>
                                <th className="font-semibold w-52">Tipe</th>
                                <th className="font-semibold">Nama</th>
                                <th className="font-semibold">Jumlah</th>
                                <th className="font-semibold">Booking</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center">
                            <tr className="text-xs font-medium text-gray-800 h-10">
                                <td>01</td>
                                <td>
                                    <span className="text-teal-600 rounded-full bg-teal-100 px-4 py-1">Vinyl</span>
                                </td>
                                <td>Lapanagan A</td>
                                <td>2</td>
                                <td>
                                    <Link className="text-sky-600 py-1 px-3 bg-sky-100 rounded-full after:content-['_↗'] hover:underline" to="/detail/booking">Detail</Link>
                                </td>
                            </tr>
                            <tr className="text-xs font-medium text-gray-800 h-10">
                                <td>02</td>
                                <td>
                                    <span className="text-teal-600 bg-teal-100 px-4 py-1 rounded-full">Vinyl</span>
                                </td>
                                <td>Lapanagan A</td>
                                <td>2</td>
                                <td>
                                    <Link className="text-sky-600 py-1 px-3 bg-sky-100 rounded-full after:content-['_↗'] hover:underline" to="/detail/booking">Detail</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <FormField isOpen={isOpen} onClose={onHandleToggleForm} />
            </div>
        </div>
    )
}

export default MyCourt;