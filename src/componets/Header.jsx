import React from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { useNavigate } from 'react-router-dom';

const Header = ()=> {
  let navigateHome=useNavigate()
  return (
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
            <h2 onClick={()=>navigateHome('/')} >VIDEOFLIX</h2>
            <h3>Tv Shows</h3>
            <h3>Movies</h3>
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

