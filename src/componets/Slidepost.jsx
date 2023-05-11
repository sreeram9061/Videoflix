import { useFetch } from "../customHocks/useFetch"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const Slidepost = ({url,page}) => {

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 650px)")
    //watch for updates
    function updateIsNarrowScreen(e){
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
  })

 

    const[results,errorInfo]=useFetch(url,{page})

    const slidOption={
        perPage: 4,
        pagination: false,
        type    : 'loop',
        autoplay: true,
        breakpoints:{
          950:{
            perPage: 4,
          },
          750:{
            perPage: 3,
          },
          550:{
            perPage: 1,
          }
        }
    }
  return (
    <div className="splidercontaienr">
        <Splide options={slidOption} >
            {
              results.filter(item=>item.backdrop_path)
              .map(newItem=>
                <SplideSlide>
                <img src={`https://image.tmdb.org/t/p/w300/${newItem.backdrop_path}`} alt="" />
                </SplideSlide>
                )
            }
        </Splide >
    </div>
  )
}

export default Slidepost
