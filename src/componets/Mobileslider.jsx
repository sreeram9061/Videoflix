
import { useContext, useEffect, useRef } from "react"
import { globalData } from "../context/Globlefile"
import { AiFillStar,AiFillHeart } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";



function Mobileslider() {
  const navigate=useNavigate()
  const mobileNav=useRef()

  const handleScroll=(e)=>{
       
    if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-20){
      mobileNav.current.style.display='none'
    }else{
      mobileNav.current.style.display='flex'
    }
  }
  useEffect(()=>{
     window.addEventListener('scroll',handleScroll); 
  })

  return (
    <div ref={mobileNav} className="mobileslider">
      <div onClick={()=>navigate('/Movies')} className="tv nav-child">
       <SlScreenDesktop className="icons"/>
      <p>Tv shows</p>
      </div>
      <div onClick={()=>navigate('/Movies')} className="movie nav-child">
        <MdLocalMovies className="icons"/>
      <p>Movies</p>
      </div>
      <div className="top-r nav-child">
        <AiFillStar className="icons"/>
      <p>Top rating</p>
      </div>
      <div className="fav nav-child">
        <AiFillHeart className="icons"/>
      <p>My List</p>
      </div>
    </div>
  )
}

export default Mobileslider
