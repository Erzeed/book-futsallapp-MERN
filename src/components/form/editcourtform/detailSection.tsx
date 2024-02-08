import { useFormContext } from "react-hook-form"
import { FormCourtType } from "."
import { IoCloudUploadOutline } from "react-icons/io5"
import { AiOutlineDelete } from "react-icons/ai";
import Prompt from "../../prompt";
import { useAppContext } from "../../../context/app-context";

const DetailSection = () => {
    const { register, formState: {errors}, watch, setValue} = useFormContext<FormCourtType>()
    const { onHandleTogglePrompt, promptEvent, setIsOpenPrompt } = useAppContext()

    const existingImg = watch("imageUrl")

    const onHandleClick = () => {
        const imageUrl = promptEvent?.getAttribute("data-url")
        setValue(
            "imageUrl",
            existingImg.filter((url) => url !== imageUrl)
        );
        setIsOpenPrompt(false)
    }

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
                <div className="exitingImg flex space-x-2 w-full">
                    {existingImg && (
                        existingImg.map((item,index) => (
                            <div key={index} className="relative h-60 w-44 mt-7">
                                <img className="h-full w-full rounded object-cover" src={item} />
                                <button
                                    data-url={item}
                                    className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-lg" 
                                    type="button"
                                    onClick={onHandleTogglePrompt}
                                >
                                    <AiOutlineDelete className="text-lg"/>
                                </button>
                            </div>
                        ))
                    )}
                </div>
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
                                    const totalLength = imageFile.length + (existingImg?.length || 0);
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
            <Prompt
                title="Delete Image" 
                desc="Are you sure you want to delete image? image will be permanently removed. This action cannot be undone." 
                isConfirm={onHandleClick}
            />
        </section>
    )
}

export default DetailSection