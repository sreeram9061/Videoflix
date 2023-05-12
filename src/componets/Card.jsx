import { useState } from "react"
import { useFetch } from "../customHocks/useFetch"

const Card = ({titile,url}) => {
   const [results,errorInfo]= useFetch(url,{page:5})
   const[lengthState,setLengthState]=useState(false)
   console.log(results)
  return (
    <div className="cardsection">
        <h2>{titile}</h2>
        <div className="cardcontainer">
          {
            results.map((item,index)=>{
               if(index<12 || lengthState){
                 return <div className="imgcontainer">
                  <img key={item.id} className="cdimg" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                 </div>
               }
            })
          }
        </div>
        <div className="showfullcontent">
          <button onClick={()=>setLengthState((pre)=> !pre)}>{lengthState? 'Show less' : 'Show more'}</button>
        </div>
    </div>
  )
}

export default Card
