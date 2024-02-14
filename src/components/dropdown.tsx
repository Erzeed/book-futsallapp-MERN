import { MdOutlineNavigateNext } from "react-icons/md"
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { typeField } from "../utils/constant";

type props = {
    tipeLapangan: string,
    setTipeLapangan: Dispatch<SetStateAction<string>>
}

const Dropdown = ({tipeLapangan, setTipeLapangan}: props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleSelectChange = (event: string) => {
        setTipeLapangan(event);
    };

    return (
        <div className="dropdown relative" ref={dropdownRef}>
            <button
                className="text-sm text-zinc-400 w-full h-full px-3 flex items-center justify-between"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {tipeLapangan !== "" ? tipeLapangan : "Tipe Lapangan"}
                <MdOutlineNavigateNext className={`${isOpen ? "rotate-90" : "rotate-0"} text-xl duration-100`} />
            </button>
            <div
                className={`menu bg-white border p-1 rounded-b-lg text-xs text-zinc-500 absolute top-full left-0 w-full ${
                    isOpen ? "" : "hidden"
                }`}
            >
                {typeField.map((item, index) => (
                    <button
                        key={index}
                        className="cursor-pointer hover:bg-zinc-100 p-2 rounded hover:text-zinc-900 w-full flex justify-start"
                        onClick={() => {
                            setIsOpen(false);
                            handleSelectChange(item)
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
