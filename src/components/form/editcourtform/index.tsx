import { FormProvider, useForm } from "react-hook-form"
import GeneralSection from "./generalSection"
import FacilitySection from "./facilitySection"
import TypeFieldSection from "./typeFieldSection"
import DetailSection from "./detailSection"
import { useEffect } from "react"

export type FormCourtType = {
    name: string,
    addres: string,
    city: string,
    description: string,
    facility: string[],
    typeField: string[],
    openingHours: number,
    closingTime: number,
    imageFile: FileList,
    imageUrl: string[]
    // imageFiles: FileList;
}

type Props = {
    onSave: (FormCourtType: FormData) => void,
    isLoading: boolean,
    dataCourt?: FormCourtType 
}

const FormCourt = ({ onSave, isLoading, dataCourt }: Props) => {
    const formMethods = useForm< FormCourtType >()
    const { handleSubmit, reset } = formMethods

    useEffect(() => {
        reset(dataCourt)
    }, [dataCourt, reset])

    const onHandleSubmit = (data: FormCourtType) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("addres", data.addres);
        formData.append("city", data.city);
        formData.append("description", data.description);
        formData.append("openingHours", data.openingHours.toString());
        formData.append("closingTime", data.closingTime.toString());

        data.facility.forEach((facility, index) => {
            formData.append(`facility[${index}]`, facility)
        })
        data.typeField.forEach((typeField, index) => {
            formData.append(`typeField[${index}]`, typeField)
        })
        if (data.imageUrl) {
                data.imageUrl.forEach((url, index) => {
                formData.append(`imageUrl[${index}]`, url);
            });
        }
        Array.from(data.imageFile).forEach((imageFile) => {
            formData.append(`imageFile`, imageFile)
        })
        onSave(formData)
    }

    return(
        <FormProvider {...formMethods}>
            <form className="w-full md:w-4/5 mt-5 space-y-5" onSubmit={handleSubmit(onHandleSubmit)}>
                <GeneralSection />
                <FacilitySection />
                <TypeFieldSection />
                <DetailSection />
                <div className="flex justify-end w-full">
                    <button 
                        className="flex justify-center items-center w-28 h-10 text-xs font-semibold  bg-blue-100 hover:bg-blue-500 hover:text-white rounded-full" 
                        type="submit">
                            {isLoading ? "Simpan...": "Simpan"}
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

export default FormCourt