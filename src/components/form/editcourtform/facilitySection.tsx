import { useFormContext } from "react-hook-form"
import { FormCourtType } from "."
import { facilityOption } from "../../../utils/constant"

const FacilitySection = () => {
    const { register,
            formState: {errors} } 
        = useFormContext<FormCourtType>()
    
    return(
        <section className="facility text-sm font-semibold text-zinc-600 my-3">
            <p>Facility</p>
            <div className="flex flex-wrap my-2 gap-4">
                {facilityOption?.map((item, index) => (
                    <div key={index}>
                        <input 
                            id={item.name}
                            type="checkbox"
                            value={item.name}
                            className="peer hidden"
                            {...register("facility", {
                                validate: (facility) => {
                                    if(facility && facility.length > 0){
                                        return true
                                    } else {
                                        return "Minimal pilih salah satu facilitas"
                                    }
                                }
                            })}
                        />
                        <label 
                            htmlFor={item.name} 
                            className="flex items-center justify-center cursor-pointer min-w-20 h-10 px-4 bg-slate-100 rounded-full text-xs hover:bg-blue-200 peer-checked:bg-blue-500 peer-checked:text-white"
                        >
                            <span className="pr-3">{item.icons}</span>
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
            {errors.facility && (
                <span className="text-xs text-red-500">{errors.facility.message}</span>
            )}
        </section>
    )
}

export default FacilitySection