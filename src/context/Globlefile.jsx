import { createContext, useEffect, useMemo, useReducer, useState } from "react"
import { listReducer } from "../reducers/reducer"
export const globalData=createContext()
export const errorStatus=createContext()
export const TvAndMovieStatus=createContext()
export const topRatedStates=createContext()
export const myLystContext=createContext()
export const checkPropertyMylist=createContext()
export const navigateHome=createContext()
export const searchboxContext=createContext()

const Globlefile=({children})=>{
    let [errorStatusState,setErrorStatus]=useState(null)
    const [TvAndMovieState,setTvAndMovie]=useState(null)
    const [itemNavigate,setItemNavigate]=useState(true)
    const [page,setPage]=useState(1)
    const [list, listDispatch] = useReducer(listReducer,[]);
    const [property,setProperty]=useState({propertyName:null,reference:null})
    const [isSearchbox,setIsSearchbox]=useState(false)
    console.log(isSearchbox)

    useEffect(()=>{
        localStorage.setItem("myList", JSON.stringify(list));
    },[list])

    let myListData=localStorage.getItem("myList")

    useEffect(()=>{ 
        myListData && (
            listDispatch({
                type:'LOCAL_STORAGE_DATA',
                payload:JSON.parse(myListData),
            }) 
        )
    },[])

    
    return(
        <errorStatus.Provider value={[errorStatusState,setErrorStatus]}>
        <TvAndMovieStatus.Provider value={[TvAndMovieState,setTvAndMovie]}>
        <topRatedStates.Provider value={[itemNavigate,setItemNavigate,page,setPage]}>
        <myLystContext.Provider value={[list, listDispatch]}>
        <checkPropertyMylist.Provider value={[property,setProperty]}>
            <searchboxContext.Provider value={[isSearchbox,setIsSearchbox]}>
            {children}
            </searchboxContext.Provider>
        </checkPropertyMylist.Provider>
        </myLystContext.Provider>
        </topRatedStates.Provider>
        </TvAndMovieStatus.Provider>
        </errorStatus.Provider>
    )
}

export default Globlefile