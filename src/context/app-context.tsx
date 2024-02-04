import React, { createContext, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../utils/api";
import { toast } from "react-toastify";

type AppContext = {
    isLoggin: boolean,
    isOpenPrompt: boolean,
    onHandleTogglePrompt: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onHandlePromptConfirm: () => void
}

const AppContext = createContext< AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [isOpenPrompt, setIsOpenPrompt] = useState(false)
    const [promptId, setPromptId] = useState<string>()
    const queryClient = useQueryClient();
    
    const { isError } = useQuery("validateToken", api.validateToken, {
        retry: false
    })

    const {mutate} = useMutation(api.deleteDataField, {
        onSuccess: async () => {
            setIsOpenPrompt(false)
            toast.success("Berhasil Dihapus")
            await queryClient.fetchQuery("getDataLapangan")
        },
        onError: (error) => {
            console.log(error)
            setIsOpenPrompt(false)
            toast.error("Gagal menghapus")
        }
    })

    const onHandleTogglePrompt = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget as HTMLButtonElement;
        setPromptId(target.id)
        isOpenPrompt ? setIsOpenPrompt(false): setIsOpenPrompt(true)
    }

    const onHandlePromptConfirm = () => {
        if(promptId){
            mutate(promptId)
        }
    }

    return(
        <AppContext.Provider value={{
            isOpenPrompt,
            onHandleTogglePrompt,
            onHandlePromptConfirm,
            isLoggin: !isError
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
};