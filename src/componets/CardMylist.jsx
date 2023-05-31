import { AiFillStar,AiFillDelete,AiOutlineFullscreen } from "react-icons/ai";
import { useStringMinimize } from "../customHocks/useStringMinimize";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const CardMylist = ({data,listDispatch}) => {

  const{poster_path,id,title,name,first_air_date,release_date,vote_average}=data
  const navigate=useNavigate()

  const handleDeleteList=()=>{
   listDispatch({
     type:'DELETE_ITEM_FROM_LIST',
     payload:data,
   })
  }
  const handleNavigatePage=()=>{
    navigate(`${id}`)
    localStorage.setItem('ItemOfDetails',JSON.stringify(data))
  }

  return (
    <div className="mylistcard">
        <div className="mylistimage">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        </div>
        <div className="discription">
            <h3>{title? title : name}</h3>
            <p>{useStringMinimize( release_date? release_date : first_air_date,0,4)}</p>
            <p>{useStringMinimize(JSON.stringify(vote_average),0,3)}<AiFillStar className="icons"/></p>
        </div>
        <div className="viewOrDelete">
            <button onClick={handleDeleteList} className="delete"> <AiFillDelete/> </button>
            <button onClick={handleNavigatePage} className="fullscreen"> <AiOutlineFullscreen/> </button>
        </div>
    </div>
  )
}
export default CardMylist
