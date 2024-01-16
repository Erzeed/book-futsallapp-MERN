import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import hero3 from "../assets/hero3.png";
import Card from "../components/card";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="container mb-2 overflow-y-hidden">
            <div className="bg-[#144FCC] h-[74vh] w-[100vw] text-white flex justify-between items-center px-7">
                <div className="desc w-1/2 z-10">
                    <h1 className="text-7xl leading-tight font-bold logo">Discover New Destination</h1>
                    <p className="text-sm tracking-wide">This modern trend looks nice and all, but we fill into the same trap again</p>
                </div>
                <div className="w-1/2 h-full">
                    <img className="bg-cover bg-center" src={hero3} alt="" />
                </div>
            </div>
            <div className="search px-7 gap-5 w-full mt-10 ">
                <div className="search w-full border shadow-md h-28 rounded-2xl overflow-hidden">
                    <div className="title text-xs font-semibold flex  justify-center items-center w-full min-h-8 border-b text-zinc-800">
                        <p className="underline underline-offset-[11px] decoration-blue-900">Search Futsal Field</p>
                    </div>
                    <div className="form">

                    </div>
                </div>
            </div>
            <div 
                className="content-card grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full px-7 my-5 gap-6"
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-center">
                <Link to="/search" className="text-sm font-semibold py-2 px-8 rounded-full shadow-lg border hover:bg-[#88304E] hover:text-white hover:shadow-none" >More</Link>
            </div>
            <div className="banner flex flex-row-reverse border rounded-lg h-72 mx-7 my-5">
                <div className="banner-rounded relative overflow-hidden w-1/2 flex justify-start items-center">
                    <div className="rounded-full absolute -right-2 -top-2 h-20 w-20 bg-yellow-300"></div>
                    <div className="rounded-full h-[450px] w-[450px] bg-[#144FCC] text-white flex justify-center items-center">
                        <div className="des font-semibold text-2xl leading-7">
                            <h1>Find <motion.span 
                                        animate={{ x: 100 }}
                                        transition={{ ease: "easeOut", duration: 2 }}
                                        className="underline underline-offset-4 decoration-yellow-300">
                                            Field
                                        </motion.span>
                            </h1>
                            <h2>for your next field</h2>
                            <button className="bg-white rounded-sm text-[#144FCC] text-sm py-1 px-16 mt-3" type="button">
                                Discover Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner-img flex justify-center items-center w-1/2">
                    <img className="bg-cover" src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;
