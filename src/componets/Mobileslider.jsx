
import { useContext, useEffect, useRef } from "react"
import { TvAndMovieStatus,} from "../context/Globlefile"
import { AiFillStar,AiFillHeart,AiFillHome } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";



function Mobileslider() {
  const navigate=useNavigate()
  const mobileNav=useRef()

  const handleScroll=()=>{
    if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-140){
      mobileNav.current.style.transform= 'translateY(200px)'
    }else{
      mobileNav.current.style.transform= 'translateY(0)'
    }
  }
  useEffect(()=>{
     window.addEventListener('scroll',handleScroll); 
  })

  const [,setTvAndMovie]=useContext(TvAndMovieStatus)

  const handleTvShow=()=>{
    navigate('/TvShows')
    setTvAndMovie('Tv')
  }
  const handleMovie=()=>{
    navigate('/Movies')
    setTvAndMovie('Movie')
  }

  return (
    <div ref={mobileNav} className="mobileslider">
      <div onClick={()=>navigate('/')} className="ho nav-child">
       <AiFillHome className="icons"/>
      <p>Home</p>
      </div>
      <div onClick={handleTvShow} className="tv nav-child">
       <SlScreenDesktop className="icons"/>
      <p>Tv shows</p>
      </div>
      <div onClick={handleMovie} className="movie nav-child">
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
