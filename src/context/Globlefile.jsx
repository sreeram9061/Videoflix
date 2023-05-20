import { createContext, useState } from "react"
export const globalData=createContext()
export const errorStatus=createContext()
export const showDetails=createContext()
export const TvAndMovieStatus=createContext()

const Globlefile=({children})=>{
    let [stateDetails,setDetails]=useState({})
    let [errorStatusState,setErrorStatus]=useState(null)
    const [TvAndMovieState,setTvAndMovie]=useState(null)

    return(
        <errorStatus.Provider value={[errorStatusState,setErrorStatus]}>
            <showDetails.Provider value={[stateDetails,setDetails]}>
                <TvAndMovieStatus.Provider value={[TvAndMovieState,setTvAndMovie]}>
                {children}
                </TvAndMovieStatus.Provider>
            </showDetails.Provider>
        </errorStatus.Provider>
    )
}

export default Globlefile