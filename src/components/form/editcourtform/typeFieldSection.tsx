import { useFormContext } from "react-hook-form"
import { typeField } from "../../../utils/constant"
import { FormCourtType } from "."

const TypeFieldSection = () => {
    const { register,
            formState: { errors }} 
        = useFormContext<FormCourtType>();

    return(
        <section className="text-sm font-semibold text-zinc-600 my-3">
            <p>Type Field</p>
            <div className="flex flex-wrap my-2 gap-4">
                { typeField?.map((item, index) => (
                    <div key={index}>
                        <input 
                            id={item}
                            type="checkbox"
                            value={item}
                            className="peer hidden"
                            {...register("typeField", {
                                validate: (typeField) => {
                                    if(typeField && typeField.length > 0){
                                        return true
                                    } else {
                                        return "Minimal pilih salah satu type field"
                                    }
                                }
                            })}
                        />
                        <label 
                            htmlFor={item} 
                            className="flex items-center justify-center cursor-pointer min-w-20 h-10 px-4 bg-slate-100 rounded-full text-xs hover:bg-blue-200 peer-checked:bg-blue-500 peer-checked:text-white"
                        >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
            {errors.typeField && (
                <span className="text-xs text-red-500">{errors.typeField.message}</span>
            )}
        </section>
    )
}

export default TypeFieldSection