import { BsCheck } from "react-icons/bs";

type props = {
    title: string,
    data: string[],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ title, data, onChange}: props) => {

    return(
        <div className="border-b px-4 py-2 border-gray-200">
            <h1 className="font-semibold text-sm tracking-wide pb-3">{title}</h1>
            <div className="content flex flex-col space-y-2">
                {data?.map((item,index) => (
                    <label key={index} className="relative font-thin text-sm text-gray-500 tracking-wide flex items-center">
                        <input 
                            id={item}
                            type="checkbox" 
                            className="mr-2 cursor-pointer w-[17px] h-[17px] appearance-none border-2 border-black rounded checked:bg-blue-700 checked:border-0 peer"
                            onChange={onChange}
                            value={item}
                        />
                            <BsCheck className="absolute text-base top-[2px] left-0 text-white"/>
                        {item}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Checkbox