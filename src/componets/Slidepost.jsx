import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useNavigate } from "react-router-dom";

const Slidepost = ({result}) => {
  const navaigate=useNavigate()
  const[data]=result

  const navigatePage=(item)=>{
    localStorage.setItem('ItemOfDetails',JSON.stringify(item))
    navaigate(`/${item.id}`)
  }
 
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
                <img onClick={()=>navigatePage(newItem)} src={`https://image.tmdb.org/t/p/w300/${newItem.backdrop_path}`} alt="" />
                <h1>{newItem.original_name}</h1>
                </SplideSlide>
                )
            }
        </Splide >
    </div>
  )
}

export default Slidepost
