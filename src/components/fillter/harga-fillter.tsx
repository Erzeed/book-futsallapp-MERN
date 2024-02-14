
type props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const HargaFilter = ({onChange}:props) => {
    return(
        <div className="harga border-b px-4 py-2 border-gray-200">
            <h1 className="font-semibold text-sm tracking-wide pb-3">Harga</h1>
            <div className="content space-y-4">
                <div className="min rounded-md w-full h-9 border flex items-center text-base overflow-hidden">
                    <p className="h-full w-1/5 text-zinc-500 font-medium bg-zinc-100 flex items-center justify-center">Rp</p>
                    <input 
                        id="MIN"
                        type="number" 
                        className="h-full w-4/5 focus:outline-none px-1 text-sm" 
                        placeholder="Min Harga"
                        onChange={onChange}
                    />
                </div>
                <div className="min rounded-md w-full h-9 border flex items-center text-base overflow-hidden">
                    <p className="h-full w-1/5 text-zinc-500 font-medium bg-zinc-100 flex items-center justify-center">Rp</p>
                    <input 
                        id="MAX"
                        type="number" 
                        className="h-full w-4/5 focus:outline-none px-1 text-sm" 
                        placeholder="Max Harga"
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default HargaFilter