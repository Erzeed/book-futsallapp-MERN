import { FormCourtType } from "./form/editcourtform"

const Table = ({ name, addres, city, closingTime, description, facility, openingHours, typeField}: FormCourtType) => {
    return(
        <table className="w-full lg:col-span-2">
            <tbody className="align-top text-left text-sm">
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Nama</th>
                    <td className="w-5/6 lg:w-4/5">{name}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Kota</th>
                    <td className="w-5/6 lg:w-4/5">{city}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Alamat Lengkap</th>
                    <td className="w-5/6 lg:w-4/5">{addres}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Deskripsi</th>
                    <td className="w-5/6 lg:w-4/5">{description}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Jam Buka</th>
                    <td className="w-5/6 lg:w-4/5">{`${openingHours} - ${closingTime}`}</td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Fasilitas</th>
                    <td className="w-5/6 lg:w-4/5">
                        {facility.map((item, index) => (
                            <span key={index} className="px-3 py-1 text-blue-800 text-xs font-medium  bg-blue-100 rounded-full mr-1">{item}</span>
                        ))}
                    </td>
                </tr>
                <tr>
                    <th className="font-medium text-zinc-800 w-1/6 lg:w-1/5">Tipe Lapangan</th>
                    <td className="w-5/6 lg:w-4/5">
                        {typeField.map((item, index) => (
                            <span key={index} className="px-3 py-1 text-blue-800  bg-blue-100 text-xs font-medium  rounded-full mr-1">{item}</span>
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table