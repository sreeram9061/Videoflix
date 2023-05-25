import { createContext, useMemo, useReducer, useState } from "react"
import { listReducer } from "../reducers/reducer"
export const globalData=createContext()
export const errorStatus=createContext()
export const showDetails=createContext()
export const TvAndMovieStatus=createContext()
export const topRatedStates=createContext()
export const myLystContext=createContext()
export const checkPropertyMylist=createContext()

const Globlefile=({children})=>{
    let [stateDetails,setDetails]=useState({})
    let [errorStatusState,setErrorStatus]=useState(null)
    const [TvAndMovieState,setTvAndMovie]=useState(null)
    const [itemNavigate,setItemNavigate]=useState(true)
    const [page,setPage]=useState(1)
    const [list, listDispatch] = useReducer(listReducer,[]);
    const [property,setProperty]=useState({propertyName:null,reference:null})

    useMemo(()=>{
        localStorage.setItem("myList", JSON.stringify(list));
    },[list])
    
    return(
        <errorStatus.Provider value={[errorStatusState,setErrorStatus]}>
        <showDetails.Provider value={[stateDetails,setDetails]}>
        <TvAndMovieStatus.Provider value={[TvAndMovieState,setTvAndMovie]}>
        <topRatedStates.Provider value={[itemNavigate,setItemNavigate,page,setPage]}>
        <myLystContext.Provider value={[list, listDispatch]}>
        <checkPropertyMylist.Provider value={[property,setProperty]}>
        {children}
        </checkPropertyMylist.Provider>
        </myLystContext.Provider>
        </topRatedStates.Provider>
        </TvAndMovieStatus.Provider>
        </showDetails.Provider>
        </errorStatus.Provider>
    )
}

export default Globlefile