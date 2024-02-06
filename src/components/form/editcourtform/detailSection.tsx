import { useFormContext } from "react-hook-form"
import { FormCourtType } from "."
import { IoCloudUploadOutline } from "react-icons/io5"

const DetailSection = () => {
    const { register, formState: {errors}} = useFormContext<FormCourtType>()
    // const existingImageFile = watch("imageFile");
    return(
        <section className="detail text-sm font-semibold text-zinc-600">
            <div className="flex gap-5 my-3">
                <label className="flex flex-col">
                    Jam Buka
                    <input 
                        type="time" 
                        className="h-11 w-30 bg-slate-50 rounded-lg mt-2 px-4 focus:outline-none border shadow-inner"
                        {...register("openingHours", {required: "Jam harus diisi"})}
                    />
                    {errors.openingHours && (
                        <span className="text-xs text-red-500 mt-1">{errors.openingHours.message}</span>
                    )}
                </label>
                <label className="relative flex flex-col">
                    Jam Tutup
                    <input 
                        type="time" 
                        className="h-11 w-30 bg-slate-50 rounded-lg mt-2 px-4 focus:outline-none border shadow-inner"
                        {...register("closingTime", {required: "Jam harus diisi"})}
                    />
                    {errors.closingTime && (
                        <span className="text-xs text-red-500 mt-1">{errors.closingTime.message}</span>
                    )}
                </label>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
                <p className="absolute top-0 left-0">Images</p>
                <label htmlFor="dropzone-file" className="mt-8 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-50 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <IoCloudUploadOutline className="text-4xl mb-3"/>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG(MAX 5 MB)</p>
                    </div>
                    <input 
                        id="dropzone-file" 
                        multiple
                        accept="image/*"
                        type="file" 
                        className="hidden"
                            {...register("imageFile", {
                                validate: (imageFile) => {
                                    const totalLength = imageFile.length;
                                    if (totalLength === 0) {
                                        return "Gambar belum di uploud";
                                    } else if (totalLength > 6) {
                                        return "Maksimal gambar yang diuploud 6";
                                    }
                                    return true;
                                }
                            })}
                        />
                </label>
                {errors.imageFile && (
                    <span className="absolute left-0 -bottom-6 text-xs text-red-500">{errors.imageFile.message}</span>
                )}
            </div> 

        </section>
    )
}

export default DetailSection