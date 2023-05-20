import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import Infocard from "../componets/Infocard"
import {  useContext, useEffect,useMemo,useState } from "react"
import { deleteDuplicate } from "../customHocks/deleteDuplicate"
import { TvAndMovieStatus } from "../context/Globlefile"
import Loading from "../componets/Loading"

const Singlecardpag = ({title}) => {
    
    const [page,setPage]=useState(1)
    const [resultState,setResult]=useState([])
    const [TvAndMovieState,]=useContext(TvAndMovieStatus)
    const [pageLoading,setPageLoading]=useState(true)

    const [result,error,loading]=title=='Tv shows'?
    useFetch('/tv/on_the_air',{page}):
    useFetch('/movie/popular',{page})

    console.log({result},{resultState})
    const handleCheck =()=>{
        if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
          setPage((pre)=>pre+1)
          setPageLoading(true)
        }
    }

    useEffect(()=>{
      setResult([])
      setPage(1)
      document.body.scrollTop=0;
      document.documentElement.scrollTop = 0;
    },[TvAndMovieState])

    useEffect(()=>{
      if(title=='Tv shows'){
        result.some(item=> item.hasOwnProperty('name') &&
         setResult(pre=> deleteDuplicate([ ...pre, ...result])) )
      }else{
        result.some(item=> item.hasOwnProperty('title') &&
        setResult(pre=> deleteDuplicate([ ...pre, ...result])) )
      }
      setPageLoading(false)
    },[result])


    useEffect(()=>{
      window.addEventListener('scroll',handleCheck)
    },[])

  return (
    <div className="singlecardspag">
        <Wrapper>
            <h3>{title}</h3>
            <div className="container">
                {resultState?.map(item=> <Infocard data={item}/>)}
            </div>
            {pageLoading && <Loading/>}
        </Wrapper>
    </div>
  )
}

export default Singlecardpag
