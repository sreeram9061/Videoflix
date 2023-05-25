import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useContext } from 'react';
import { BiAddToQueue } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { showDetails } from '../context/Globlefile';
import { useNavigate } from 'react-router-dom';
import { myLystContext } from '../context/Globlefile';
import { useCeckItemIsThere } from '../customHocks/useCeckItemIsThere';


const Slider = ({mainSlideResults}) => {

 const [,listDispatch]=useContext(myLystContext)

 const handleList=(data)=>{
  listDispatch({
    type:'LIST_FROM_MAIN_SLIDER',
    payload:data,
  })
 }

      let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        autoplay: true,
        padding: "0",
        breakpoints: {
          640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
          },
        },
      };

      const navigate = useNavigate()
      const [,setDetails]=useContext(showDetails)
      const handleMovieDetails=(id,item)=>{
        navigate(`/Details/${id}`)
        setDetails(item)
      }

  return (

    <div className="slider">
          <Splide options={splideOptions}>
          {
              mainSlideResults?.map(item=>
                <SplideSlide  key={item.id} className='innerslider'>
                  <img   src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="" />
                    <div className="wrraperdiscription">
                      <div className="discription">
                        <h1 className='shadow' >{item.original_title}</h1>
                           <p className='shadow' >{item.overview}</p>
                           <div className="btnsRating">
                            {
                              useCeckItemIsThere(item) ?
                              <button  style={{border:'2px solid green' ,color:'green' ,backgroundColor:'transparent'}} disabled ><TiTick/>Added</button> :
                              <button className='btnone' onClick={()=>handleList(item)} ><BiAddToQueue/> Add to list</button>
                            }
                           <button onClick={()=>handleMovieDetails(item.id,item)} className='btntow' >More</button>
                           <p className='reating shadow'><AiFillStar style={{color:'gold'}} />{item.vote_average}</p>
                           </div>
                        </div>
                       </div>
                  </SplideSlide>
              )
            }
        </Splide> 
    </div>

  )
}

export default Slider
