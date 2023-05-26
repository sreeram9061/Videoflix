
import { useContext, useEffect, useMemo, useRef } from "react"
import { TvAndMovieStatus, navigateHome,} from "../context/Globlefile"
import { AiFillStar,AiFillHeart,AiFillHome } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Toprated from "../pages/Toprated";



function Mobileslider() {
  const navigate=useNavigate()
  const mobileNav=useRef()
  const home=useRef()
  const tvshow=useRef()
  const movie=useRef()
  const topr=useRef()
  const addTolist=useRef()
  const [homeNavigate,setHomeNavigate]=useContext(navigateHome)
  const iconsTextLogo=[home,tvshow,movie,topr,addTolist]
  
  useEffect(()=>{
    homeNavigate && iconsTextLogo.map(item=>{
      if(item==home){
        console.log('reder',homeNavigate),
        [...item.current.children].map(iner=> iner.style.color='rgb(221, 28, 28)')
      }else{
        [...item.current.children].map(iner=> iner.style.color='white')
      }
    })
  },[homeNavigate])

  const handleScroll=()=>{
    if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-140){
      mobileNav.current.style.transform= 'translateY(200px)'
    }else{
      mobileNav.current.style.transform= 'translateY(0)'
    }
  }

  useEffect(()=>{
    [...home.current.children].map(iner=> {iner.style.color='rgb(221, 28, 28)'})
     window.addEventListener('scroll',handleScroll); 
  },[])

  const [,setTvAndMovie]=useContext(TvAndMovieStatus)


  const naviGatePage=(path,ref,type)=>{
    navigate(path)
    type && setTvAndMovie(type)
    iconsTextLogo.map(item=>{
      item==ref ?
      [...item.current.children].map(iner=> iner.style.color='rgb(221, 28, 28)'):
      [...item.current.children].map(iner=> iner.style.color='white')
    })
    ref==home ? setHomeNavigate(true) : setHomeNavigate(false)
  }

  return (
    <div ref={mobileNav} className="mobileslider">

      <div ref={home} onClick={()=>naviGatePage('/',home)} className="ho nav-child">
       <AiFillHome className="icons"/>
      <p>Home</p>
      </div>

      <div ref={tvshow} onClick={()=>naviGatePage('/TvShows',tvshow,'Tv')} className="tv nav-child">
       <SlScreenDesktop className="icons"/>
      <p>Tv shows</p>
      </div>

      <div ref={movie} onClick={()=>naviGatePage('/Movies',movie,'Movie')} className="movie nav-child">
        <MdLocalMovies className="icons"/>
      <p>Movies</p>
      </div>

      <div ref={topr} onClick={()=>naviGatePage('/TopRating',topr)} className="top-r nav-child">
        <AiFillStar className="icons"/>
      <p>Top rating</p>
      </div>

      <div ref={addTolist} onClick={()=>naviGatePage('/Mylist',addTolist)} className="fav nav-child">
        <AiFillHeart className="icons"/>
      <p>My List</p>
      </div>
    </div>
  )
}

export default Mobileslider
