import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates, dono da Sicromoft'
const [diaHoje, setDiaHoje] = useState('Quinta')


    return(
        <GlobalContext.Provider value={{usuarioLogado, diaHoje, setDiaHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}
