import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomePosterSlider = ({results,delay}) => {
    const navaigate=useNavigate()

    const navigatePage=(item)=>{
      localStorage.setItem('ItemOfDetails',JSON.stringify(item))
      navaigate(`/${item.id}`)
    }

  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      slidesPerView={'auto'}
      navigation
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      
    >

        {
            results.flat()?.map(item=>(
                <SwiperSlide key={item.id}><img onClick={()=>navigatePage(item)} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" /></SwiperSlide>
            ))
        }
    </Swiper>
  )
  
}

export default HomePosterSlider
