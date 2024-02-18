import { useQuery } from "react-query";
import Card, { typeDataCourt } from "../components/card";
import api from "../utils/api";
import Search from "../components/search";
import Checkbox from "../components/fillter/filterCheckbox";
import { location } from "../utils/constant";
import { useSearchContext } from "../context/search-contex";
import HargaFilter from "../components/fillter/harga-fillter";
import FacilityFillter from "../components/fillter/facility-fillter";
import { TbFaceIdError } from "react-icons/tb";
import { useState } from "react";
import Loading from "../components/loading";

const SearchPage = () => {
    const search = useSearchContext()
    const [ lokasiFiter, setLokasiFilter] = useState<string[]>([])
    const [ facilityFilter, setfacilityFilter] = useState<string[]>([])
    const [ minHarga, setMinHarga] = useState<string>("")
    const [ maxHarga, setMaxHarga] = useState<string>("")
    const [page, setPage] = useState<number>(5);

    const searchParams = {
        name: search.name,
        kota: search.kota,
        tipeLapangan: search.tipeLapangan,
        lokasi: lokasiFiter,
        page: page.toString(),
        facility: facilityFilter,
        minHarga: minHarga.toString(),
        maxHarga: maxHarga.toString()
    }

    const {data :searchData, isLoading} = useQuery(["search", searchParams], () => 
        api.search(searchParams)
    )

    const onHandleCheckbox = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const { target, target: {value}} = event
        if(type == "LOKASI") {
            setLokasiFilter((prev) => 
                target.checked 
                ? [...prev, value] 
                : prev.filter((lokasi) => lokasi !== value)
            );
        }
    }

    const onHandleHargaFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id } = event.target
        if(id == "MIN") {
            setMinHarga(value)
        } else if (id == "MAX") {
            setMaxHarga(value)
        }
    }

    const onHandleFacilityFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target, target: {value}} = event
        setfacilityFilter((prev) => (
            target.checked
            ? [...prev, value]
            : prev.filter((facility) => facility !== value)
        ))
    }

    return(
        <div className="mb-5 mx-10 h-full">
            <div className="content flex w-full mt-10">
                <div className="filter w-[230px] rounded-lg shadow-[0_0_7px_2px_rgba(0,0,0,.07)] space-y-1">
                    <div className="title border-b px-4 py-2 border-gray-200">
                        <h1 className="font-semibold text-sm tracking-wide">Filter</h1>
                    </div>
                    <Checkbox 
                        title="Lokasi" 
                        data={location}
                        onChange={(event) => onHandleCheckbox(event, "LOKASI")}
                    />
                    <HargaFilter onChange={onHandleHargaFilter}/>
                    {/* <Checkbox 
                        title="Tipe Lapangan" 
                        data={typeField} 
                        onChange={(event) => onHandleCheckbox(event, "LAPANGAN")}
                    /> */}
                    <FacilityFillter onChange={onHandleFacilityFilter}/>
                </div>
                <div className="card w-4/5 pl-5 space-y-3">
                    <div className="search w-full">
                        <Search searchParams={searchParams}/>
                    </div>
                    <div className="content flex flex-wrap gap-2">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            searchData?.length !== 0 ? (
                                searchData?.map((item :typeDataCourt) => (
                                    <Card key={item._id} {...item} />
                                ))
                            ) : (
                                <div className="w-full flex flex-col justify-center items-center">
                                    <TbFaceIdError className="text-[50px]"/>
                                    <p className="text-sm text-zinc-500">Data Tidak Ditemukan</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;