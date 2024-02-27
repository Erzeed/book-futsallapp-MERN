import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Dropdown from "../../dropdown";

type inputBook = {
    startDate: string,
    endDate: string
}

const CheckinForm = () => {
    const [ tipeLapangan, setTipeLapangan] = useState<string>("")
    const [value, setValue] = useState<inputBook>({ 
        startDate: "", 
        endDate: "" 
    }); 
    
    const handleValueChange = (value: inputBook) => {
        setValue(value)
    }
    const dateNow = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because month starts from 0
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log(typeof(formattedDate))
        return new Date(formattedDate)
    }
    return (
        <div className="form w-full">
            <form className="grid grid-cols-2 w-full border border-zinc-400 rounded-md py-2">
                <label className="col-span-1 w-full border-b border-zinc-400">
                    <p className="text-xs font-medium pl-3">Tanggal</p>
                    <Datepicker 
                        primaryColor={"blue"}
                        asSingle={true} 
                        value={value} 
                        useRange={false}
                        popoverDirection="down" 
                        onChange={handleValueChange}
                        minDate={dateNow()}
                        placeholder="Pilih Tanggal"
                    />
                </label>
                <label className="col-span-1 w-full border-b border-zinc-400">
                    <p className="text-xs font-medium pl-3 mb-2.5">Type Lapangan</p>
                    <Dropdown tipeLapangan={tipeLapangan} setTipeLapangan={setTipeLapangan}/>
                </label>
                <label className="col-span-2 py-2">
                    <p className="text-xs font-medium pl-3 mb-2.5">Jam</p>
                </label>
            </form>
        </div>
    );
};

export default CheckinForm;