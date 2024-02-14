import { facilityOption } from "../../utils/constant"

type props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FacilityFillter = ({onChange}: props) => {
    return(
        <div className="facility border-b px-4 py-2 border-gray-200">
            <h1 className="font-semibold text-sm tracking-wide pb-3">Facilitas</h1>
            <div className="content flex flex-wrap gap-2 w-full">
                {facilityOption?.map((item,index) => (
                    <div key={index}>
                        <input 
                            id={item.name}
                            type="checkbox" 
                            className="peer hidden"
                            value={item.name}
                            onChange={onChange}
                        />
                        <label 
                            className="py-1.5 px-3 text-xs text-gray-500 border rounded-full flex items-center duration-100 peer-checked:border-blue-700 peer-checked:border-2 peer-checked:text-black peer-checked:font-semibold cursor-pointer"
                            htmlFor={item.name} 
                        >
                            <span className="text-sm text-black mr-2">{item.icons}</span>
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FacilityFillter