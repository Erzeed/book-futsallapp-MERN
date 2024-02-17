import { createContext, useContext, useState } from "react";

type SearchContex = {
    name: string,
    kota: string,
    tipeLapangan: string,
    saveSearchValue: (
        name: string,
        kota: string,
        tipeLapangan: string,
    ) => void
}

const SearchContext = createContext<SearchContex | undefined>(undefined);

export const AppSeacrhContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ name, setNama] = useState<string>("")
    const [ kota, setKota] = useState<string>("")
    const [ tipeLapangan, setTipeLapangan] = useState<string>("")

    const saveSearchValue = (
        name: string,
        kota: string,
        tipeLapangan: string,
    ) => {
        setNama(name);
        setKota(kota);
        setTipeLapangan(tipeLapangan);
    }
    return(
        <SearchContext.Provider value={{
            name,
            kota,
            tipeLapangan,
            saveSearchValue
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    return context as SearchContex;
  };