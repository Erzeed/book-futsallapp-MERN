import { MdPlace } from "react-icons/md";
import { facilityOption } from "../utils/constant";
import CheckinForm from "../components/form/checkinForm/checkinForm";

const Booking = () => {
    const img = "https://a0.muscache.com/im/pictures/miso/Hosting-1016472629029495038/original/3af81ec2-2e2e-4aee-b9d7-7d374f2aa084.jpeg?im_w=1200"
    return(
        <div className="content mb-5">
            <div className="h-28 bg-[#144FCC] text-white px-7 flex flex-col justify-end pb-2">
                <h1 className="text-3xl mb-2 font-medium">Private Jet 2BR | Get unforgettable impressions</h1>
                <div className="desc flex space-y-2 items-center divide-x text-sm h-6">
                    <div className="place flex items-center pr-2 space-x-2">
                        <MdPlace />
                        <p>Jl. P. Mangkubumi No.18 Jl. Margo Utomo No.18, Yogyakarta 55232 Indonesia</p>
                    </div>
                    <div className="typeField flex justify-between items-center space-x-1 px-3 tracking-wide">
                        <p>Viny</p>
                        <p>Sintetis</p>
                    </div>
                    <div className="opening flex items-center space-x-1 px-3">
                        <p>10.00</p>
                        <p>-</p>
                        <p>23.00</p>
                    </div>
                </div>
            </div>
            <div className="img px-7 w-full grid grid-cols-3 space-x-2 my-5">
                <div className="left col-span-2 h-[55vh]">
                    <img src={img} className="h-full w-full rounded-l-lg object-cover object-center" />
                </div>
                <div className="rght col-span-1 grid grid-rows-2 h-[55vh] gap-2">
                    <img src={img} className="w-full rounded-r-lg row-span-1 h-full object-cover object-center" />
                    <img src={img} className="w-full rounded-r-lg row-span-1 h-full object-cover object-center" />
                </div>
            </div>
            <div className="content grid grid-cols-3 px-7 w-full gap-3">
                <div className="about col-span-2 border rounded-lg p-5 text-sm text-zinc-600 space-y-2 leading-6">
                    <p>See why so many travelers make Grand Zuri Malioboro Yogyakarta their hotel of choice when visiting Yogyakarta Region. Providing an ideal mix of value, comfort and convenience, it offers a charming setting with an array of amenities designed for travelers like you.</p>
                    <p>While staying at Grand Zuri Malioboro Yogyakarta, visitors can check out Bank Indonesia (0.4 mi) and Yogyakarta Monument (0.6 mi), some of Yogyakarta Region's top attractions.</p>
                    <p>The rooms offer a flat screen TV, air conditioning, and a refrigerator, and getting online is possible, as free wifi is available, allowing you to rest and refresh with ease.</p>
                    <p>Grand Zuri Malioboro Yogyakarta features a 24 hour front desk, a concierge, and room service. In addition, as a valued Grand Zuri Malioboro Yogyakarta guest, you can enjoy a pool and free breakfast that are available on-site. Guests arriving by vehicle have access to free parking.</p>
                    <div className="facility text-black border-t">
                        <h2 className="font-medium text-sm tracking-wide my-2">Fasilitas</h2>
                        <div className="space-y-2">
                            {facilityOption?.map((item,index) => (
                                <div key={index} className="flex items-center text-xs text-zinc-500">
                                    <span className="mr-2">{item.icons}</span>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="booking col-span-1 border border-zinc-300 rounded-xl p-4 shadow-xl h-64">
                    <CheckinForm />
                </div>
            </div>
        </div>
    )
}

export default Booking;