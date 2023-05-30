import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { NavLink,Link } from 'react-router-dom';
import { TvAndMovieStatus, searchboxContext} from '../context/Globlefile';

const Header = ()=> {
  const [,setIsSearchbox]=useContext(searchboxContext)
  const [,setTvAndMovie]=useContext(TvAndMovieStatus)

  return(
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
          <Link to='/'><h2>VIDEOFLIX</h2></Link>
          <NavLink onClick={()=>setTvAndMovie('Tv shows')} to="/TvShows" ><h3 >Tv Shows</h3></NavLink>
          <NavLink onClick={()=>setTvAndMovie('Movies')} to="/Movies" ><h3 >Movies</h3></NavLink>
          <NavLink to="/TopRating" ><h3 >Top Rating</h3></NavLink>
        </div>
        <div className="rightinner">
          <a onClick={()=>setIsSearchbox(true)} ><h3 style={{display:'flex',alignItems:'center',gap:'5px',color:'white'}}>Search<BsSearch className='searchicon'/></h3></a>
          <NavLink to="/Mylist"><h3>My List</h3></NavLink>
        </div>
        </div>
      </Wrapper>
     
    </div>
  )
}

export default Header

