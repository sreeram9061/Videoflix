import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillStar } from "react-icons/ai";

const Slider = ({results,errorInfo}) => {
      let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        type    : 'loop',
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

  return (

    <div className="slider">
          <Splide options={splideOptions}>
          {
              results?.map(movie=>
                <SplideSlide className='innerslider'>
                  <img  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="" />
                    <div className="wrraperdiscription">
                      <div className="discription">
                        <h1 className='shadow' >{movie.original_title}</h1>
                           <p className='shadow' >{movie.overview}</p>
                           <div className="btnsRating">
                            <button  className='btnone'>Add To Favorite</button>
                            <button className='btntow' >More</button>
                           <p className='reating shadow'><AiFillStar style={{color:'gold'}} />{movie.vote_average}</p>
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
