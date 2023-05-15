import { useFetch } from "../customHocks/useFetch"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const Slidepost = ({result}) => {
  const[data]=result
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  
  useEffect(() =>{
    //set initial value
    const mediaWatcher = window.matchMedia("(max-width: 650px)")
    //watch for updates
    function updateIsNarrowScreen(e){
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    //clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
  })

 
    const slidOption={
        perPage:'5',
        pagination: false,
        autoplay: true,
        padding:'0',
        autoWidth: true,
        breakpoints:{
          1230:{
            perPage:4,
          },
          950:{
            perPage: 4,
          },
          750:{
            perPage: 3,
          },
          550:{
            perPage: 2,
          }
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
