import hero from "../assets/hero.png";
import hero3 from "../assets/hero3.png";
import Card from "../components/card";

const Home = () => {
    return(
        <div className="container -mx-7 -my-2 w-full mb-2">
            <div className="bg-[#88304E] h-[70vh] w-[100vw] text-white flex justify-between items-center px-7">
                <div className="desc w-1/2 z-10">
                    <h1 className="text-7xl leading-tight font-bold logo">Discover New Destination</h1>
                    <p className="text-sm tracking-wide">This modern trend looks nice and all, but we fill into the same trap again</p>
                </div>
                {/* <div className="absolute top-0 left-0">
                    <img className="bg-cover bg-center h-[600px] w-[600px]" src={hero} alt="" />
                </div> */}
                <div className="w-1/2 h-full">
                    <img className="bg-cover bg-center" src={hero3} alt="" />
                </div>
            </div>
            <div className="search px-7 gap-5 w-full pt-10">
                <div className="search w-full border shadow-md h-28 rounded-2xl overflow-hidden">
                    <div className="title text-xs font-semibold flex  justify-center items-center w-full min-h-8 border-b text-zinc-800">
                        <p className="underline underline-offset-[11px] decoration-blue-900">Search Futsal Field</p>
                    </div>
                    <div className="form">

                    </div>
                </div>
            </div>
            <div className="content-card grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full px-7 my-5 gap-5">
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
                <button className="text-sm font-semibold py-2 px-8 rounded-full shadow-lg border hover:bg-[#88304E] hover:text-white hover:shadow-none" type="button">More</button>
            </div>
        </div>
    )
}

export default Home;
