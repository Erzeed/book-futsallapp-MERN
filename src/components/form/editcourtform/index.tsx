import { FormProvider, useForm } from "react-hook-form"
import GeneralSection from "./generalSection"
import FacilitySection from "./facilitySection"
import TypeFieldSection from "./typeFieldSection"
import DetailSection from "./detailSection"

export type FormCourtType = {
    name: string,
    addres: string,
    city: string,
    description: string,
    mapAddres: string[],
    facility: string[],
    typeField: string[],
    openingHours: number,
    closingTime: number,
    imageFile: string,
}

const FormCourt = () => {
    const formData = useForm< FormCourtType >()
    const { handleSubmit } = formData

    const onHandleSubmit = (data: FormCourtType) => {
        console.log(data)
    }

    return(
        <FormProvider {...formData}>
            <form className="w-full md:w-4/5 mt-5 space-y-5" onSubmit={handleSubmit(onHandleSubmit)}>
                <GeneralSection />
                <FacilitySection />
                <TypeFieldSection />
                <DetailSection />
                <div className="flex justify-end w-full">
                    <button 
                        className="flex justify-center items-center w-28 h-10 text-xs font-semibold  bg-blue-100 hover:bg-blue-500 hover:text-white rounded-full" 
                        type="submit">
                            Simpan
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

export default FormCourt