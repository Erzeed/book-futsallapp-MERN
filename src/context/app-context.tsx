import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import api from "../utils/api";

type AppContext = {
    isLoggin: boolean;
}

const AppContext = createContext< AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const { isError } = useQuery("validateToken", api.validateToken, {
        retry: false
    })

    return(
        <AppContext.Provider value={{
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