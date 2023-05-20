import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { useNavigate } from 'react-router-dom';
import { TvAndMovieStatus } from '../context/Globlefile';


const Header = ()=> {
  let navigate=useNavigate()

  const [,setTvAndMovie]=useContext(TvAndMovieStatus)

  const handleTvShow=()=>{
    navigate('/TvShows')
    setTvAndMovie('Tv')
  }
  const handleMovie=()=>{
    navigate('/Movies')
    setTvAndMovie('Movie')
  }
  return(
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
            <h2 onClick={()=>navigate('/')} >VIDEOFLIX</h2>
            <h3 onClick={handleTvShow}>Tv Shows</h3>
            <h3 onClick={handleMovie} >Movies</h3>
            <h3>Top Rating</h3>
        </div>
        <div className="rightinner">
          <BsSearch className='searchicon'/>
          <h3>My List</h3>

        </div>
        </div>
      </Wrapper>
     
    </div>
  )
}

export default Header

