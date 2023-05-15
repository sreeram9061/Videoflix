import { useState } from "react"
import { useFetch } from "../customHocks/useFetch"

const Card = ({titile,result}) => {

   const[lengthState,setLengthState]=useState(false)
  return (
    <div className="cardsection">
        <h2>{titile}</h2>
        <div className="cardcontainer">
          {
            result.map(({id,poster_path},index)=>{
               if(index<12 || lengthState){
                 return <div key={id} className="imgcontainer">
                  <img  className="cdimg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
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
