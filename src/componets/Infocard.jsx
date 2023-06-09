import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Infocard = ({data}) => {
    const{poster_path,title,original_name,vote_average}=data
    const navigate=useNavigate()

    const handleMovieDetails=(id,item)=>{
      navigate(`${id}`)
      localStorage.setItem('ItemOfDetails',JSON.stringify(item))
    }
  
  return (
    <div className="infocard" onClick={()=>handleMovieDetails(data.id,data)} >
        <div className="image">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <p>Rating : {vote_average}<AiFillStar className="icon"/></p>
        </div>

    </div>
  )
}

export default Infocard