
import { useContext, useEffect, useRef } from "react"
import { globalData } from "../context/Globlefile"
import { AiFillStar,AiFillHeart } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import Wrapper from "./Wrapper";

function Mobileslider() {
  let mobileNav=useRef()
/*   useEffect(()=>{
    !navStatusState ?
    mobileNav.current.style.display='none':
    mobileNav.current.style.display='flex'
  },[navStatusState]) */

  return (
    <div ref={mobileNav} className="mobileslider">
      <div className="tv nav-child">
        <SlScreenDesktop className="icons"/>
      <p>Tv shows</p>
      </div>
      <div className="movie nav-child">
        <MdLocalMovies className="icons"/>
      <p>Movies</p>
      </div>
      <div className="top-r nav-child">
        <AiFillStar className="icons"/>
      <p>Top rating</p>
      </div>
      <div className="fav nav-child">
        <AiFillHeart className="icons"/>
      <p>Favorite</p>
      </div>
    </div>
  )
}

export default Mobileslider
