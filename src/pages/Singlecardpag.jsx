import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import Infocard from "../componets/Infocard"
import {  useContext, useEffect,useMemo,useState } from "react"
import { TvAndMovieStatus } from "../context/Globlefile"
import { useDeleteDuplicate } from "../customHocks/useDeleteDuplicate"
import Loading from "../componets/Loading"
import Errorcom from "../componets/Errorcom"
import { reachTop } from "../customHocks/reachTop"

const Singlecardpag = ({title}) => {
    
    const [page,setPage]=useState(1)
    const [resultState,setResult]=useState([])
    const [TvAndMovieState,]=useContext(TvAndMovieStatus)
    const [pageLoading,setPageLoading]=useState(true)

    let [result,error,loading]=title=='Tv shows'?
    useFetch('/tv/on_the_air',{page}):
    useFetch('/movie/popular',{page})

    
    const handleCheck =()=>{
        if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
          setPage((pre)=>pre+1)
          setPageLoading(true)
        }
    }

  

    useMemo(()=>{
      setResult([])
      setPage(1)
      reachTop()
    },[TvAndMovieState])

    useMemo(()=>{
      setResult(pre=> useDeleteDuplicate([ ...pre, ...result])) 
      setPageLoading(false)
    },[result])


    useEffect(()=>{
      window.addEventListener('scroll',handleCheck)
      return()=>{
        window.removeEventListener('scroll',handleCheck)
      }
    })

  return(
    <div className="singlecardspag">
        <Wrapper>
            <h3>{title}</h3>
            {error && <Errorcom Error={error} />}
            <div className="container">
                {resultState?.filter(item => item.poster_path).map((item,ind)=> <Infocard key={item.id+ind} data={item}/>)}
            </div>
            {!error && pageLoading && <Loading/>}
        </Wrapper>
    </div>
  )
}

export default Singlecardpag
