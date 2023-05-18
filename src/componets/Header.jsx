import React from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { useNavigate } from 'react-router-dom';

const Header = ()=> {
  let navigate=useNavigate()
  return (
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
            <h2 onClick={()=>navigate('/')} >VIDEOFLIX</h2>
            <h3 >Tv Shows</h3>
            <h3 onClick={()=>navigate('/Movies')} >Movies</h3>
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

