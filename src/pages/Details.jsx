import { useContext, useMemo } from "react"
import { showDetails } from "../context/Globlefile"
import { useParams } from "react-router-dom"
import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import { AiFillStar } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Loading from "../componets/Loading"
import Errorcom from "../componets/Errorcom"

const Details = () => {


  const{id}=useParams()
  const [stateDetails,]=useContext(showDetails)

  let isProperty=stateDetails.hasOwnProperty('original_title')
  let data= isProperty ? useFetch(`/movie/${id}`)  : useFetch(`/tv/${id}`)
  
  const[results,errorInfo,loading]=data
  const{backdrop_path,genres,overview,poster_path,release_date,vote_average}=results
  
  console.log(results)
  const bgStyle={
    backgroundImage:` url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center top'
  }
  return (
    <>
        {loading && <Loading/>}
        {errorInfo && <Errorcom/>}
        {
          !loading && !errorInfo && (
            <div className="itemDetails">
            <div className="firstcontainer" style={bgStyle}>
      
                 <div className="detailsContainer">
                  <Wrapper>
                  <div className="detailsItems">
                      <div className="poster">
                       <img   src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                      </div>
                      <div className="description">
                        <h1>{isProperty ? results.original_title : results.original_name}</h1>
                        <p>{results.overview}</p>
      
                        <div className="genres">
                          <p>Genres : {genres?.map(({name})=>`${name} `)}</p>
                        </div>
                        <p>Release Date : {release_date}</p>
      
                        <div className="addfavorite_rate">
                          <button><BiAddToQueue/>Add to list</button>
                          <p><AiFillStar className="staricon"/>{vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                 </div>
            </div>
          </div>
          )
        }
    </>
  )
}

export default Details

