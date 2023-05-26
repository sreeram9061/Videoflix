import React, { useContext, useRef } from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { useNavigate } from 'react-router-dom';
import { TvAndMovieStatus, navigateHome } from '../context/Globlefile';


const Header = ()=> {
  let navigate=useNavigate()
  const [homeNavigate,setHomeNavigate]=useContext(navigateHome)

  const homeH=useRef()
  const tvshowH=useRef()
  const movieH=useRef()
  const toprH=useRef()
  const addTolistH=useRef()
  const iconH=useRef()
  const iconsTextLogo=[homeH,tvshowH,movieH,toprH,addTolistH]

  const [,setTvAndMovie]=useContext(TvAndMovieStatus)

  const handleNavigate=(link,ref,type)=>{
    navigate(link)
    type && setTvAndMovie(type)
    iconsTextLogo?.map(item=>{
      item==ref && ref!=homeH ?
      item.current.style.borderBottom='2px solid red':
      item.current.style.borderBottom='2px solid transparent'
      ref == homeH? setHomeNavigate(true) : setHomeNavigate(false)
    })
  }
  return(
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
            <h2 ref={homeH} onClick={()=>handleNavigate('/',homeH)} >VIDEOFLIX</h2>
            <h3 ref={tvshowH}  onClick={()=>handleNavigate('/TvShows',tvshowH,'Tv')}>Tv Shows</h3>
            <h3 ref={movieH}  onClick={()=>handleNavigate('/Movies',movieH,'Movie')} >Movies</h3>
            <h3 ref={toprH}  onClick={()=>handleNavigate('/TopRating',toprH)} >Top Rating</h3>
        </div>
        <div className="rightinner">
          <BsSearch   className='searchicon'/>
          <h3  ref={addTolistH} onClick={()=>handleNavigate('/Mylist',addTolistH)}>My List</h3>
        </div>
        </div>
      </Wrapper>
     
    </div>
  )
}

export default Header

