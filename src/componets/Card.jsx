import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { showDetails } from "../context/Globlefile"
const Card = ({titile,result}) => {

   const[lengthState,setLengthState]=useState(false)
   const navigate = useNavigate()
   const [,setDetails]=useContext(showDetails)

   const handleMovieDetails=(id,item)=>{
    navigate(`/Details/${id}`)
    setDetails(item)
   }

  return (
    <div className="cardsection">
        <h2>{titile}</h2>
        <div className="cardcontainer">
          {
            result.filter(item=> item.poster_path)
            .map((item,index)=>{
              const{id,poster_path}=item
               if(index<12 || lengthState){
                 return <div onClick={()=>handleMovieDetails(id,item)} key={id} className="imgcontainer">
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
