import { useQuery } from "react-query";
import Card, { typeDataCourt } from "../components/card";
import api from "../utils/api";
import Search from "../components/search";

const SearchPage = () => {

    const { data: dataCourt } = useQuery("getDataCourt",api.getDataCourt, {
        onError: (error) => {
            console.log(error)
        }
    })

    return(
        <div className="mb-2 mx-10">
            <div className="search w-full mt-10 ">
                <Search />
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

export default SearchPage;