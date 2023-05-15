import Slider from "../componets/Slider"
import Slidepost from "../componets/Slidepost"
import Wrapper from "../componets/Wrapper"
import Card from "../componets/Card"
import Errorcom from "../componets/Errorcom"
import { useFetch } from "../customHocks/useFetch"
import Loading from "../componets/Loading"

function Home() {
  const[mainSlideResults,mainSlideErrorInfo,slideLoading]=useFetch('/movie/now_playing',{page:1})
  const[fSmllSlideResults,fSmallSlideErrorInfo,fSmallloading]=useFetch('/tv/on_the_air',{page:1})
  const[sSmllSlideResults,sSmallSlideErrorInfo,sSmallSlideloading]=useFetch('/tv/on_the_air',{page:2})
  const [cardDataOne,cardDataErrorInfo,cardloading]=useFetch('/movie/popular',{page:1})
  const [cardDataTow,cardDataErrorInTow,cardTowLoading]=useFetch('/tv/airing_today',{page:1})

  /* here cheking error || loading has or not */
  const loading=[slideLoading,fSmallloading,sSmallSlideloading,cardloading,cardTowLoading].some(item=> item==true)
  const errorIsIn=[mainSlideErrorInfo,fSmallSlideErrorInfo,sSmallSlideErrorInfo,cardDataErrorInfo,cardDataErrorInTow].some(item=> item? true : false)


  console.log(mainSlideResults)
  return (
    <div className="home">
        {loading && <Loading/>}
        {errorIsIn && !loading && <Errorcom Error={mainSlideErrorInfo}/>}
    {!errorIsIn && !loading && (
      <>
      <Slider {...{mainSlideResults}}/>
      <div className="slidepost" >
            <div className="container"  >
              <Wrapper>
                 <h2>Best Tv show</h2>
              </Wrapper>
               <Slidepost {...{result:[fSmllSlideResults]}}/>
               <Slidepost  {...{result:[sSmllSlideResults]}}/>
           </div>
           <Wrapper>
             <Card titile={'Now Playing Movies'} result={cardDataOne}/>
             <Card titile={'Tv show '} result={cardDataTow}/>
           </Wrapper>
      </div>
      </>
    )}
    </div>

  )
}

export default Home
