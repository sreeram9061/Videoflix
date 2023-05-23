import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { showDetails } from "../context/Globlefile";
import { useContext } from "react";

const Infocard = ({data}) => {
    const{poster_path,title,original_name,vote_average}=data
    const navigate=useNavigate()
    const [,setDetails]=useContext(showDetails)

    const handleMovieDetails=(id,item)=>{
      navigate(`/Details/${id}`)
      setDetails(item)
     }

  return (
    <div className="infocard" onClick={()=>handleMovieDetails(data.id,data)} >
        <div className="image" >
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <p>Rating : {vote_average}<AiFillStar className="icon"/></p>
        </div>
        <div className="cardtitle">
            <h3>{title || original_name}</h3>
        </div>
    </div>
  )
}

export default Infocard
