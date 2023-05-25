import { AiFillStar,AiFillDelete,AiOutlineFullscreen } from "react-icons/ai";
import { useStringMinimize } from "../customHocks/useStringMinimize";
import { myLystContext } from "../context/Globlefile";
import { useNavigate } from "react-router-dom";
const CardMylist = ({data,listDispatch}) => {
  const{poster_path,id,title,name,first_air_date,release_date,vote_average}=data
  const navigate=useNavigate()
  

  const handleDeleteList=()=>{
   listDispatch({
     type:'DELETE_ITEM_FROM_LIST',
     payload:data,
   })
  }

  return (
    <div className="mylistcard">
        <div className="mylistimage">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        </div>
        <div className="discription">
            <h3>{title? title : name}</h3>
            <p>{useStringMinimize( release_date? release_date : first_air_date,0,4)}</p>
            <p>{vote_average}<AiFillStar className="icons"/></p>
        </div>
        <div className="viewOrDelete">
            <button onClick={handleDeleteList} className="delete"> <AiFillDelete/> </button>
            <button onClick={()=>navigate(`/Details/${id}`)} className="fullscreen"> <AiOutlineFullscreen/> </button>
        </div>
    </div>
  )
}
export default CardMylist
