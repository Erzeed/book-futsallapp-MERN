import { FormCourtType } from "./form/editcourtform"

const Table = ({ name, addres, city, closingTime, description, facility, openingHours, typeField}: FormCourtType) => {

    const Separate = () => {
        return <span className="absolute right-1">:</span>
    }
    return(
        <table className="w-full lg:col-span-2 min-h-64">
            <tbody className="align-top text-left text-sm tracking-[.2px] text-zinc-800">
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Nama <Separate /></th>
                    <td className="w-5/6 lg:w-4/5">{name}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Kota <Separate /></th>
                    <td className="w-5/6 lg:w-4/5">{city}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Alamat Lengkap <Separate /></th>
                    <td className="w-5/6 lg:w-4/5 leading-6">{addres}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Deskripsi <Separate /></th>
                    <td className="w-5/6 lg:w-4/5 leading-6">{description}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Jam Buka <Separate /></th>
                    <td className="w-5/6 lg:w-4/5">{openingHours && `${openingHours} - ${closingTime}`}</td>
                </tr>
                <tr className="my-2">
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Fasilitas <Separate /></th>
                    <td className="w-5/6 lg:w-4/5">
                        {facility?.map((item, index) => (
                            <span key={index} className="px-3 py-1 text-sky-600 text-xs font-medium  bg-sky-100 rounded-full mr-1">{item}</span>
                        ))}
                    </td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5 relative">Tipe Lapangan <Separate /></th>
                    <td className="w-5/6 lg:w-4/5">
                        {typeField?.map((item, index) => (
                            <span key={index} className="px-3 py-1 text-teal-600  bg-teal-100 text-xs font-medium  rounded-full mr-1">{item}</span>
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table