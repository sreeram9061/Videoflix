import Header from "../componets/Header"
import Slider from "../componets/Slider"
import Mobileslider from "../componets/Mobileslider"
import { useFetch } from "../customHocks/useFetch"
import Slidepost from "../componets/Slidepost"
import Wrapper from "../componets/Wrapper"
import Card from "../componets/Card"
function Home() {
  const[results,errorInfo]=useFetch('/movie/now_playing',{page:1})
  return (
    <>

        <Slider {...{results,errorInfo}}/>
        <div className="slidepost" >
             <div className="container"  >
             <Wrapper>
               <h2>Best Tv show</h2>
            </Wrapper>
               <Slidepost {...{url:'/tv/on_the_air',page:1}}/>
               <Slidepost  {...{url:'/tv/on_the_air',page:2}}/>
             </div>
             <Wrapper>
             <Card titile={'Now Playing Movies'} url={'/movie/popular'}/>
             <Card titile={'Tv show '} url={'/tv/airing_today'}/>
             </Wrapper>
        </div>

    </>
  )
}

export default Home
