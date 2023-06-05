
import { useContext, useEffect, useMemo, useRef } from "react"
import { TvAndMovieStatus, navigateHome,} from "../context/Globlefile"
import { AiFillStar,AiFillHeart,AiFillHome } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import { NavLink } from "react-router-dom";



function Mobileslider() {
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
     window.removeEventListener('scroll',handleScroll); 
  })
  const [,setTvAndMovie]=useContext(TvAndMovieStatus)


  return (
    <div ref={mobileNav} className="mobileslider">
      <NavLink to="/">
        <div  className="ho nav-child">
          <AiFillHome className="icons"/>
         <p>Home</p>
        </div>
      </NavLink>

      <NavLink onClick={()=>setTvAndMovie('Tv shows')} to="/TvShows">
       <div className="tv nav-child">
         <SlScreenDesktop className="icons"/>
        <p>Tv shows</p>
       </div>
      </NavLink>
      
      <NavLink onClick={()=>setTvAndMovie('Movies')} to="/Movies" >
        <div  className="movie nav-child">
          <MdLocalMovies className="icons"/>
        <p>Movies</p>
        </div>
      </NavLink>

      <NavLink to="/TopRating">
      <div className="top-r nav-child">
        <AiFillStar className="icons"/>
      <p>Top rating</p>
      </div>
      </NavLink>

      <NavLink to="/Mylist">
      <div className="fav nav-child">
        <AiFillHeart className="icons"/>
      <p>My List</p>
      </div>
      </NavLink>
    </div>
  )
}

export default Mobileslider
