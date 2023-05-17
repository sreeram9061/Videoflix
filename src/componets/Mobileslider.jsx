
import { useContext, useEffect, useRef } from "react"
import { globalData } from "../context/Globlefile"
import { AiFillStar,AiFillHeart } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";


function Mobileslider() {

  const mobileNav=useRef()

  const handleScroll=(e)=>{
       
    if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-20){
      mobileNav.current.style.transform='translateY(200px)'
    }else{
      mobileNav.current.style.transform='translateY(0)'
    }
  }
  useEffect(()=>{
     window.addEventListener('scroll',handleScroll); 
  })

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
      <p>My List</p>
      </div>
    </div>
  )
}

export default Mobileslider
