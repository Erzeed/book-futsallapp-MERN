import { createContext, useContext, useState } from "react";

type SearchContex = {
    nama: string,
    kota: string,
    tipeLapangan: string,
    saveSearchValue: (
        nama: string,
        kota: string,
        tipeLapangan: string,
    ) => void
}

const SearchContext = createContext<SearchContex | undefined>(undefined);

export const AppSeacrhContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ nama, setNama] = useState<string>("")
    const [ kota, setKota] = useState<string>("")
    const [ tipeLapangan, setTipeLapangan] = useState<string>("")

    const saveSearchValue = (
        nama: string,
        kota: string,
        tipeLapangan: string,
    ) => {
        setNama(nama);
        setKota(kota);
        setTipeLapangan(tipeLapangan);
    }
    return(
        <SearchContext.Provider value={{
            nama,
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