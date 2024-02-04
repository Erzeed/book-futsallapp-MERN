import { GoAlert } from "react-icons/go";
import { useAppContext } from "../context/app-context";

type props = {
    title: string,
    desc: string
}

const Prompt = ({ title, desc}: props) => {
    const { isOpenPrompt, onHandleTogglePrompt, onHandlePromptConfirm} = useAppContext()

    return(
        <div className={`${
            isOpenPrompt ? "scale-100": "scale-0 delay-200"
        } w-full h-full z-20 fixed top-0 left-0 flex justify-center`}
        >
            <div className={`${
                isOpenPrompt ? "scale-100": "scale-0"
            } bg-white w-[400px] h-40 rounded-lg shadow-2xl p-3 flex flex-col justify-between mt-10 transition ease-in-out delay-100 duration-200`}
            >
                <div className="flex space-x-3">
                    <div className="icon flex justify-center items-center w-20 h-10 bg-red-50 rounded-full">
                        <GoAlert className="text-2xl text-red-500" />
                    </div>
                    <div className="title">
                        <h1 className="text-base font-medium tracking-wide">{title}</h1>
                        <p className="text-xs text-zinc-500 tracking-wide pt-1 leading-[18px]">{desc}</p>
                    </div>
                </div>
                <div className="w-full flex justify-end space-x-3">
                    <button 
                        className="px-3 text-white py-1 text-sm font-medium rounded bg-red-500"
                        onClick={onHandlePromptConfirm}
                    >
                        Delete
                    </button>
                    <button 
                        className="px-3 py-1 text-sm font-medium rounded border-2"
                        onClick={onHandleTogglePrompt}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Prompt