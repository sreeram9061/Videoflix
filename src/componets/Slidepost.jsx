import { useFetch } from "../customHocks/useFetch"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const Slidepost = ({result}) => {
  const[data]=result
 
    const slidOption={
        perPage:'5',
        pagination: false,
        autoplay: true,
        padding:'0',
        autoWidth: true,
        breakpoints:{

        }
    }
  return (
    <div className="splidercontaienr">
        <Splide options={slidOption} >
            {
              data?.filter(item=> item.backdrop_path)
              .map(newItem=>
                <SplideSlide key={newItem.id} style={{fontSize:'16px'}}>
                <img src={`https://image.tmdb.org/t/p/w300/${newItem.backdrop_path}`} alt="" />
                <h1>{newItem.original_name}</h1>
                </SplideSlide>
                )
            }
        </Splide >
    </div>
  )
}

export default Slidepost
