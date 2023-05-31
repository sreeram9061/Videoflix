import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Backdropcard = ({item})=>{

    const {backdrop_path,id,title,name,vote_average}=item
    const navigate=useNavigate()

    const handleData=()=>{
      navigate(`${id}`)
      localStorage.setItem('ItemOfDetails',JSON.stringify(item))
    }

  return (
    <div className="backdrop" onClick={handleData}>
      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
        <p>{title ? title : name}</p>
      </div>
      <div className="textsection">
        <p className="text_icon_text"><AiFillStar style={{color:'gold'}} />{vote_average}</p>
      </div>
    </div>
  )
}

export default Backdropcard
