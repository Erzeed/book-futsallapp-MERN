import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

type props = {
    navImage: number,
    onClickPrev: () => void,
    onClickNext: () => void,
    imgLength: number
}
const NavImgBtn = ({ navImage, onClickPrev, imgLength, onClickNext}: props) => {

    return(
        <>
            <button 
                className={`${
                    navImage <= 0 ? "hidden": "" 
                } prev p-2 rounded-full shadow-xl bg-white scale-0 group-hover:scale-100 duration-200 absolute top-[45%] left-2`} 
                type="button"
                onClick={onClickPrev}
            >
                <GrPrevious className="text-base" />
            </button>
            <button 
                className={`${
                    navImage == imgLength ? "hidden" : ""
                } next p-2 rounded-full shadow-xl bg-white scale-0 group-hover:scale-100 duration-200 absolute top-[45%] right-2`} 
                type="button"
                onClick={onClickNext}
            >
                <GrNext className="text-base" />
            </button>
        </>
    )
}

export default NavImgBtn