import { Link } from "react-router-dom";
import { FormAddField } from "./form/addFieldForm/formField";
import { AiOutlineDelete } from "react-icons/ai";
import { LuFolderEdit } from "react-icons/lu";
import { useAppContext } from "../context/app-context";

type props = {
    data: FormAddField[],
    onClickUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const TableField = ({ data, onClickUpdate }: props) => {
    const { onHandleTogglePrompt } = useAppContext()
    return(
        <table className="w-full divide-y divide-gray-200">
            <thead>
                <tr className="bg-zinc-100 text-sm font-medium text-gray-700 uppercase tracking-wide h-8">
                    <th className="font-semibold w-28">Nomor</th>
                    <th className="font-semibold w-52">Tipe</th>
                    <th className="font-semibold">Nama</th>
                    <th className="font-semibold">Harga</th>
                    <th className="font-semibold">Booking</th>
                    <th className="font-semibold w-20">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-center">
                {data?.map((item, index) => (
                    <tr key={item._id} className="text-xs font-medium text-gray-800 h-12">
                        <td>{++index}</td>
                        <td>
                            <span className="text-teal-600 rounded-full bg-teal-100 px-4 py-1">{item.typeField}</span>
                        </td>
                        <td>{item.nameField}</td>
                        <td>{`Rp.${item.pricePerHours}`}</td>
                        <td>
                            <Link className="text-sky-600 py-1 px-3 bg-sky-100 rounded-full after:content-['_↗'] hover:underline" to="/detail/booking">Detail</Link>
                        </td>
                        <td className="flex items-center h-12 justify-center space-x-4">
                            <button
                                id={item._id}
                                className="text-blue-600 "
                                onClick={(event) => onClickUpdate(event)}
                            >
                                <LuFolderEdit className="text-xl"/>
                            </button>
                            <button
                                id={item._id}
                                className="text-red-600 "
                                onClick={(event) => onHandleTogglePrompt(event)}
                            >
                                <AiOutlineDelete className="text-xl"/>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableField