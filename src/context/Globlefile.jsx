import { createContext, useState } from "react"
export const globalData=createContext()
export const errorStatus=createContext()
const Globlefile=({children})=>{
    let [navStatusState,setNavStatus]=useState(false)
    let [errorStatusState,setErrorStatus]=useState(null)
    return(
        <globalData.Provider value={[navStatusState,setNavStatus]}>
        <errorStatus.Provider value={[errorStatusState,setErrorStatus]}>
        {children}
        </errorStatus.Provider>
        </globalData.Provider>
    )
}

export default Globlefile