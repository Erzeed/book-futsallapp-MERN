import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import api from "../utils/api";

type AppContext = {
    isLoggin: boolean,
    isOpenPrompt: boolean,
    setIsOpenPrompt: Dispatch<SetStateAction<boolean>>,
    onHandleTogglePrompt: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    promptEvent: HTMLButtonElement | undefined
}

const AppContext = createContext< AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [isOpenPrompt, setIsOpenPrompt] = useState(false)
    const [promptEvent, setPrompEvent] = useState<HTMLButtonElement>()
    
    const { isError } = useQuery("validateToken", api.validateToken, {
        retry: false
    })

    const onHandleTogglePrompt = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget as HTMLButtonElement;
        setPrompEvent(target)
        isOpenPrompt ? setIsOpenPrompt(false): setIsOpenPrompt(true)
    }

    return(
        <AppContext.Provider value={{
            isOpenPrompt,
            setIsOpenPrompt,
            onHandleTogglePrompt,
            isLoggin: !isError,
            promptEvent
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
};