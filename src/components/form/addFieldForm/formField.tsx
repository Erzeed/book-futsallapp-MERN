import { useForm } from "react-hook-form"
import { typeField } from "../../../utils/constant"

type FormAddField = {
    typeField: string,
    fieldProfileId: object,
    pricePerHours: number,
    nameField: string,
}

type Props = {
    isOpen: boolean,
    onClose: () => void
}

const FormField = ({ isOpen, onClose }: Props) => {
    const { register, handleSubmit, formState: {errors}} = useForm<FormAddField>()

    const onHandleSubmit = (data: FormAddField) => {
        console.log(data)
    }
    return(
        <div className={`${
            isOpen ? "scale-100" : "scale-0 delay-300"
        } formfield z-30 top-0 left-0 w-full h-full fixed flex justify-center bg-[rgba(0,0,0,.2)]`}
        >
            <div className={`${
                isOpen ? "translate-y-0": "-translate-y-[400px]" 
            } content bg-white rounded w-[450px] h-[350px] mt-10 overflow-hidden duration-200 delay-100`}
            >
                <div className="title text-sm text-white font-semibold bg-blue-600 h-9 flex justify-center items-center shadow-lg">
                    <h1>Tambah Lapangan</h1>
                </div>
                <form 
                    className="px-5 py-4 w-full space-y-4" 
                    onSubmit={handleSubmit(onHandleSubmit)}
                >
                    <label className="relative flex flex-col text-sm text-zinc-800">
                        Tipe
                        <select 
                            className="mt-2 px-3 py-2 text-zinc-400 rounded bg-slate-100 focus:outline-none cursor-pointer"
                            {...register("typeField", {required: "Tipe belum dipilih"})}
                        >
                            <option value="" selected>Tipe Lapangan</option>
                            {typeField?.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        {errors.typeField && (
                            <span className="text-xs text-red-500 font-semibold absolute right-2 top-10">{errors.typeField.message}</span>
                        )}
                    </label>
                    <label className="relative flex flex-col text-sm text-zinc-800">
                        Nama
                        <input 
                            type="text" 
                            className="mt-2 px-3 py-2 rounded bg-slate-100 focus:outline-none"
                            placeholder="Nama Lapangan"
                            {...register("nameField", {required: "Nama belum di isi"})}
                        />
                        {errors.nameField && (
                            <span className="text-xs text-red-500 font-semibold absolute right-2 top-10">{errors.nameField.message}</span>
                        )}
                    </label>
                    <label className="relative flex flex-col text-sm text-zinc-800">
                        Harga
                        <input 
                            type="number" 
                            className="mt-2 px-3 py-2 rounded bg-slate-100 focus:outline-none"
                            placeholder="Harga perjam"
                            {...register("pricePerHours", {required: "Harga belum di isi"})}
                        />
                        {errors.pricePerHours && (
                            <span className="text-xs text-red-500 font-semibold absolute right-2 top-10">{errors.pricePerHours.message}</span>
                        )}
                    </label>
                    <div className="button flex space-x-4 justify-end text-xs font-semibold">
                        <button className="px-5 py-2 text-sky-600 bg-sky-100 rounded hover:bg-blue-600 hover:text-white">simpan</button>
                        <button 
                            className="px-5 py-2 text-red-600 bg-red-100 rounded hover:bg-red-600 hover:text-white"
                            onClick={onClose}
                        >
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormField