import Table from "../components/table";
import api from "../utils/api";
import FormField from "../components/form/addFieldForm/formField";
import TableField from "../components/tableField";
import Prompt from "../components/prompt";
import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";

const MyCourt = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [idField, setIdField] = useState<string>()
    const reff = useRef<HTMLDivElement>(null)
    const imgReff = useRef<HTMLImageElement>(null)
    
    const { data: dataProfile } = useQuery("getProfileCourt",api.getProfileCourt, {
        onError: (error) => {
            console.log(error)
        }
    })
    
    const { data: dataLapangan } = useQuery("getDataLapangan",api.getDataField, {
        onError: (error) => {
            console.log(error)
        }
    })

    const onHandleToggleForm = () => {
        isOpen ? setIsOpen(false): setIsOpen(true)
    }

    const onHandleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = event.currentTarget
        onHandleToggleForm()
        setIdField(id)
    }

    useEffect(() => {
        onHandleListener()
    },[])

    const onZoom = (event: MouseEvent) => {
        const target = event.target as HTMLTextAreaElement;
        const x = event.clientX - target.offsetLeft;
        const y = event.clientY - target.offsetTop;
    
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
        <div className="px-7 min-h-[calc(100vh-95px)] mb-5">
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
                    <TableField data={dataLapangan} onClickUpdate={onHandleUpdate}/>
                </div>
                <FormField isOpen={isOpen} onClose={onHandleToggleForm} idField={idField}/>
            </div>
            <Prompt
                title="Delete Data" 
                desc="Are you sure you want to delete data? data will be permanently removed. This action cannot be undone." 
            />
        </div>
    )
}

export default MyCourt;