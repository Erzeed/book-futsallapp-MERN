import { IoSearch } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import Dropdown from "./dropdown";

export type propsValid = {
    nama: string,
    kota: string,
    tipe: string
}

const Search = () => {
    const { handleSubmit, register } = useForm<propsValid>();

    const onHandleSubmit = (data: string) => {
        console.log(data)
    }

    return(
        <div className="search w-full border h-36 rounded-2xl">
            <div className="title text-xs font-semibold flex  justify-center items-center w-full h-1/5 border-b text-zinc-800">
                <p className="underline underline-offset-[11px] decoration-blue-900">Search Futsal Field</p>
            </div>
            <div className="flex items-center justify-center h-4/5 px-10">
                <form className="bg-white rounded-full h-[51px] w-[85%] grid grid-cols-4 shadow-3xl border px-2 text-sm divide-x" onSubmit={handleSubmit(onHandleSubmit)}>
                    <input 
                        type="text" 
                        placeholder="Nama"
                        className="focus:outline-none px-3 rounded-l-full"
                        {...register("nama")}
                    />
                    <input 
                        type="text" 
                        placeholder="Kota" 
                        className="focus:outline-none px-3"
                        {...register("kota")}
                    />
                        <Dropdown  />
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