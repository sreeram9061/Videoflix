import { createContext, useState } from "react"
export const globalData=createContext()
const Globlefile=({children})=>{
    let [navStatusState,setNavStatus]=useState(false)
    return(
        <globalData.Provider value={[navStatusState,setNavStatus]}>
            {children}
        </globalData.Provider>
    )
}

export default Globlefile