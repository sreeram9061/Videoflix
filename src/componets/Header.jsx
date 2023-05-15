import React, { useContext, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import { RiMenu3Line } from "react-icons/ri";
import { globalData } from '../context/Globlefile';
const Header = ()=> {

  return (
    <div className='header'>
      <Wrapper>
        <div className="container">
        <div className="leftinner">
            <h2>VIDEOFLIX</h2>
            <h3>Tv Shows</h3>
            <h3>Movies</h3>
            <h3>Top Rating</h3>
        </div>
        <div className="rightinner">
          <BsSearch className='searchicon'/>
          <h3>Favorite</h3>

        </div>
        </div>
      </Wrapper>
     
    </div>
  )
}

export default Header

