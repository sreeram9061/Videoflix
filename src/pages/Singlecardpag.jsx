import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import Infocard from "../componets/Infocard"
import {  useContext, useEffect,useMemo,useState } from "react"
import { TvAndMovieStatus } from "../context/Globlefile"
import { useDeleteDuplicate } from "../customHocks/useDeleteDuplicate"
import Loading from "../componets/Loading"

const Singlecardpag = ({title}) => {
    
    const [page,setPage]=useState(1)
    const [resultState,setResult]=useState([])
    const [TvAndMovieState,]=useContext(TvAndMovieStatus)
    const [pageLoading,setPageLoading]=useState(true)

    let [result,error,loading]= title=='Tv shows'?
    useFetch('/tv/on_the_air',{page}):
    useFetch('/movie/popular',{page})
    console.log(result)
    const handleCheck =()=>{
        if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
          setPage((pre)=>pre+1)
          setPageLoading(true)
        }
    }

    console.log(result)



    useMemo(()=>{
      setResult([])
      setPage(1)
      document.body.scrollTop=0;
      document.documentElement.scrollTop = 0;
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
            <div className="container">
                {resultState?.map((item,ind)=> <Infocard key={item.id+ind} data={item}/>)}
            </div>
            {pageLoading && <Loading/>}
        </Wrapper>
    </div>
  )
}

export default Singlecardpag
