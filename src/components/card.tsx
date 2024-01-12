import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const Card = () => {
    const url = "https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720";

    return(
        <div className="container h-80 ">
            <div className="img rounded-lg shadow-md h-[73%] w-full relative overflow-hidden">
                <img className="h-full w-full bg-cover" src={url} alt="" />
                <div className="rounded-full p-2 bg-white absolute top-2 right-2 cursor-pointer">
                    <AiOutlineLike className="shadow-lg text-black text-base"/>
                </div>
            </div>
            <div className="desc flex flex-col justify-between h-[27%] text-sm font-semibold my-1 p-2 tracking-wide rounded-lg shadow-md border">
                <div className="desc-wrap flex justify-between">
                    <p>Majenang, Cilacap</p>
                    <div className="rating space-x-2 flex items-center">
                        <FaStar />
                        <p>4.5</p>
                    </div>
                </div>
                <p className="w-fit px-2 h-5 text-xs  bg-green-100 rounded text-green-900">open</p>
                <p>Rp 200,00 hours</p>
            </div>
        </div>
    )
}

export default Card;