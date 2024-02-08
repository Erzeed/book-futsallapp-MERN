import { useState, useRef, useEffect } from "react";
import { typeField } from "../utils/constant";

const Dropdown = () => {
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

    return (
        <div className="dropdown relative" ref={dropdownRef}>
            <button
                className="text-sm text-zinc-400 w-full h-full px-3"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Tipe Lapangan
            </button>
            <div
                className={`menu bg-white border p-1 rounded-b-lg text-xs text-zinc-500 absolute top-full left-0 w-full ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <select 
                    defaultValue=""
                    className="hidden"
                />
                {typeField.map((item, index) => (
                    <option
                        key={index}
                        className="cursor-pointer hover:bg-zinc-100 p-2 rounded hover:text-zinc-900"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {item}
                    </option>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
