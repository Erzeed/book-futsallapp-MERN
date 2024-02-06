import Table from "../components/table";
import api from "../utils/api";
import FormField from "../components/form/addFieldForm/formField";
import TableField from "../components/tableField";
import Prompt from "../components/prompt";
import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useQuery } from "react-query";
import { useRef, useState } from "react";
import NavImgBtn from "../components/navImageBtn";

const MyCourt = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [idField, setIdField] = useState<string>()
    const [navImage, setNavImage] = useState(0)
    const reff = useRef<HTMLDivElement>(null)
    
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

    const onHandleNavImage = (type: string) => {
        if(type == "NEX") {
            setNavImage(prev => prev + 1)
        } else if(type == "PREV") {
            setNavImage(prev => prev - 1)
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
                    <div className="detail w-full lg:col-span-1 mt-5 lg:mt-0 flex justify-center group">
                            <div 
                                className="relative img h-80 w-full sm:w-1/2 lg:w-3/4 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
                                style={{ 
                                        backgroundImage: `url(${dataProfile?.imageUrl[navImage]})`,
                                        borderRadius: "15px"
                                    }}
                                ref={reff}
                            >
                                <NavImgBtn 
                                    navImage={navImage}
                                    imgLength={dataProfile?.imageUrl.length - 1} 
                                    onClickPrev={() => onHandleNavImage("PREV")}
                                    onClickNext={() => onHandleNavImage("NEX")}
                                />
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