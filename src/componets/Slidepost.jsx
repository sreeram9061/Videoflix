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
        rewind : true,
        focus  : 'center',
        pagination: false,
        breakpoints:{
          950:{
            perPage: 4,
          },
          750:{
            perPage: 3,
          },
          550:{
            perPage: 2,
          },
          550:{
            perPage: 2,
          }
        }
    }
  return (
    <div className="splidercontaienr">
              <Splide options={slidOption} >
            {results?.map(item=>{
                  if(!item.backdrop_path) {
                    return null
                  }else{
                    return(
                      <SplideSlide>
                      <img src={`https://image.tmdb.org/t/p/${isNarrowScreen?'w185':'w300'}/${item.backdrop_path}`} alt="" />
                      </SplideSlide>
                    )
                  }
            })}
        </Splide >
    </div>
  )
}

export default Slidepost
