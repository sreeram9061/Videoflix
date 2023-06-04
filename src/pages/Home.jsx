import Slider from "../componets/Slider"
import Wrapper from "../componets/Wrapper"
import Card from "../componets/Card"
import Errorcom from "../componets/Errorcom"
import { useFetch } from "../customHocks/useFetch"
import Loading from "../componets/Loading"
import { useMemo } from "react"
import HomePosterSlider from "../componets/HomePosterSlider"

function Home() {
  const [mainSlideResults,mainSlideErrorInfo,slideLoading]=useFetch('/movie/now_playing',{page:1})
  const [cardDataOne,cardDataErrorInfo,cardloading]=useFetch('/movie/popular',{page:1})
  const [cardDataTow,cardDataErrorInTow,cardTowLoading]=useFetch('/tv/airing_today',{page:3})

  /* here cheking error || loading has or not */
  const loading=[slideLoading,cardloading,cardTowLoading].some(item=> item==true)
  const errorIsIn=[mainSlideErrorInfo,cardDataErrorInfo,cardDataErrorInTow].every(item=> item? true : false)

  useMemo(()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop= 0;
  },[])

  

  return (
    <div className="home">
        {loading && <Loading/>}
        {errorIsIn && <Errorcom Error={mainSlideErrorInfo} />}
    {!errorIsIn && !loading && (
      <>
      <Slider {...{mainSlideResults}}/>
      <div className="slidepost" >
            <div className="container">
              <Wrapper>
                 <h2>Best Tv show</h2>
              </Wrapper>

              <HomePosterSlider {...{page:1,delay:3000}}/>
           </div>
           <Wrapper>
           <Card titile={'Now Playing Movies'} result={cardDataOne} />
             <Card titile={'Tv show'} result={cardDataTow} />
           </Wrapper>
      </div>
      </>
    )}
    </div>

  )
}

export default Home
