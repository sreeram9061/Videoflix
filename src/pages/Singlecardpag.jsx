import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import Infocard from "../componets/Infocard"
import { useEffect,useState } from "react"
const Singlecardpag = () => {

    const [page,setPage]=useState(2)
    const [resultState,setResult]=useState([])


    const [result,error,loading]=useFetch('/movie/popular',{page})


    const handleCheck =()=>{
        if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
          setPage((pre)=>pre+1)
        }
    }
    
    useEffect(()=>{
      setResult(pre=> [...pre , ...result])
    },[page])

    useEffect(()=>{
      window.addEventListener('scroll',handleCheck)
    },[])

  return (
    <div className="singlecardspag">
        <Wrapper>
            <h3>Title</h3>
            <div className="container">
                {resultState?.map(item=> <Infocard data={item}/>)}
            </div>
        </Wrapper>
    </div>
  )
}

export default Singlecardpag
