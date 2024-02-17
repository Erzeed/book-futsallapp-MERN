import { IoSearch } from "react-icons/io5";
import Dropdown from "./dropdown";
import { useSearchContext } from "../context/search-contex";
import { FormEvent, useState } from "react";

const Search = () => {
    const search = useSearchContext()
    const [ name, setNama] = useState<string>(search.name)
    const [ kota, setKota] = useState<string>(search.kota)
    const [ tipeLapangan, setTipeLapangan] = useState<string>(search.tipeLapangan)

    const onHandleSearch = (event: FormEvent) => {
        event.preventDefault()
        search.saveSearchValue(name, kota, tipeLapangan)
    }
    return(
        <div className="search w-full border h-36 rounded-2xl">
            <div className="title text-xs font-semibold flex  justify-center items-center w-full h-1/5 border-b text-zinc-800">
                <p className="underline underline-offset-[11px] decoration-blue-900">Search Futsal Field</p>
            </div>
            <div className="flex items-center justify-center h-4/5 px-7">
                <form className="bg-white rounded-full h-[51px] w-full grid grid-cols-4 shadow-3xl border px-2 text-sm divide-x" onSubmit={onHandleSearch}>
                    <input 
                        type="text" 
                        placeholder="Nama"
                        className="focus:outline-none px-3 rounded-l-full"
                        value={name}
                        onChange={(event) => setNama(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Kota" 
                        className="focus:outline-none px-3"
                        value={kota}
                        onChange={(event) => setKota(event.target.value)}
                    />
                        <Dropdown  tipeLapangan={tipeLapangan} setTipeLapangan={setTipeLapangan}/>
                    <div className="flex justify-end items-center py-[5px]">
                        <button 
                            className="h-full flex justify-center items-center w-32 border rounded-full bg-blue-700 text-white font-medium" 
                            type="submit"
                        >
                            <IoSearch className="text-xl mr-2" />
                            Cari
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search