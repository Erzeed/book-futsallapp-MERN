import { useQuery } from "react-query";
import Card from "../components/card";
import { typeDataCourt } from "./home";
import api from "../utils/api";

const Search = () => {

    const { data: dataCourt } = useQuery("getDataCourt",api.getDataCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    return(
        <div className="mb-2 mx-10">
            <div className="search gap-5 w-full mt-10 ">
                <div className="search w-full border shadow-md h-28 rounded-2xl overflow-hidden">
                    <div className="title text-xs font-semibold flex  justify-center items-center w-full min-h-8 border-b text-zinc-800">
                        <p className="underline underline-offset-[11px] decoration-blue-900">Search Futsal Field</p>
                    </div>
                    <div className="form">

                    </div>
                </div>
            </div>
            <div className="content flex w-full mt-5">
                <div className="filter w-1/5 border rounded-lg h-96">

                </div>
                <div className="card w-4/5 pl-5 space-y-3">
                    {dataCourt?.map((item :typeDataCourt) => (
                        <Card key={item._id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search;