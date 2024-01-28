import { useFormContext } from "react-hook-form"
import { FormCourtType } from "."

const GeneralSection = () => {
    const { register,
            formState: {errors} 
        } = useFormContext<FormCourtType>()

    return(
        <section className="general text-sm font-semibold text-zinc-600">
            <label className="relative">
                Name
                <input 
                    type="text" 
                    className="h-11 w-full bg-slate-50 rounded-lg mt-2 px-4 focus:outline-none border shadow-inner"
                    placeholder="Name"
                    {...register("name", {required: "name masih kosong"})}
                />
                {errors.name && (
                    <span className="absolute right-3 bottom-0 text-xs text-red-500">{errors.name.message}</span>
                )}
            </label>
            <div className="grid md:grid-cols-2 gap-3 my-3">
                <label className="relative">
                    City
                    <input 
                        type="text" 
                        className="h-11 w-full bg-slate-50 rounded-lg mt-2 px-4 focus:outline-none border shadow-inner"
                        placeholder="City"
                        {...register("city", {required: "city masih kosong"})}
                    />
                    {errors.city && (
                        <span className="absolute right-3 bottom-3 text-xs text-red-500">{errors.city.message}</span>
                    )}
                </label>
                <label className="relative">
                    Addres
                    <input 
                        type="text" 
                        className="h-11 w-full bg-slate-50 rounded-lg mt-2 px-4 focus:outline-none border shadow-inner"
                        placeholder="Addres"
                        {...register("addres", {required: "addres masih kosong"})}
                    />
                    {errors.addres && (
                        <span className="absolute right-3 bottom-3 text-xs text-red-500">{errors.addres.message}</span>
                    )}
                </label>
            </div>
            <label className="relative">
                Desription
                <textarea
                    className="h-20 w-full border bg-slate-50 rounded-lg mt-2 p-4 focus:outline-none resize-none shadow-inner"
                    placeholder="Desription"
                    {...register("description", {required: "description masih kosong"})}
                />
                {errors.description && (
                    <span className="absolute right-3 bottom-9 text-xs text-red-500">{errors.description.message}</span>
                )}
            </label>
        </section>
    )
}

export default GeneralSection