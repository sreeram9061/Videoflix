import { createContext, useState } from "react"
export const globalData=createContext()
export const errorStatus=createContext()
export const showDetails=createContext()

const Globlefile=({children})=>{
    let [stateDetails,setDetails]=useState({})
    let [errorStatusState,setErrorStatus]=useState(null)
    return(
        <errorStatus.Provider value={[errorStatusState,setErrorStatus]}>
            <showDetails.Provider value={[stateDetails,setDetails]}>
             {children}
            </showDetails.Provider>
        </errorStatus.Provider>
    )
}

export default Globlefile