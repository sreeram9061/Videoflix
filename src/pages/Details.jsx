import { useContext, useMemo } from "react"
import { myLystContext } from "../context/Globlefile"
import {useParams } from "react-router-dom"
import   Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import { AiFillStar } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import Loading from "../componets/Loading"
import Errorcom from "../componets/Errorcom"
import Card from "../componets/Card"
import { useCeckItemIsThere } from "../customHocks/useCeckItemIsThere";
import { useStringMinimize } from "../customHocks/useStringMinimize"
import { reachTop } from "../customHocks/reachTop"



const Details = () => {

  const{id}=useParams()
  const [,listDispatch]=useContext(myLystContext)

  const handleList=(data)=>{
   listDispatch({
     type:'ADD_LIST',
     payload:data,
   })
  }

  let isProperty=JSON.parse(localStorage.getItem('ItemOfDetails')).hasOwnProperty('title')
  let[results,errorInfo,loading]= isProperty ? useFetch(`/movie/${id}`) : useFetch(`/tv/${id}`)
  useMemo(()=> reachTop() ,[results])

  const [similarResult,sError,Sloading]= isProperty? 
  useFetch(`movie/${id}/similar`):
  useFetch(`/tv/${id}/similar`)

  const{backdrop_path,genres,overview,poster_path,release_date,first_air_date,runtime,spoken_languages,vote_average}=results

  const bgStyle={
    backgroundImage:` url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center top'
  }

  return (
    <>
        {loading && (
          <div className="loaderContainer">
            <Loading/>
          </div>
        )}
        {errorInfo && <Errorcom Error={errorInfo}/>}

        {
          !loading && !errorInfo && (
            <div className="itemDetails">
            <div className="firstcontainer" style={bgStyle}>
                 <div className="detailsContainer">
                  <Wrapper>
                  <div className="detailsItems">
                      <div className="poster">
                       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                      </div>
                      <div className="description">
                        <h1>{isProperty ? results.original_title : results.original_name}</h1>
                        <p>{results.overview}</p>
                        
                        <div className="genres">
                          <p>Genres : {genres?.map(({name},ind)=> genres.length-1!=ind? `${name}, ` :`${name}` )}</p>
                        </div>
                        <p>Release Date : {release_date ? release_date : first_air_date}</p> 

                        <p>Runtime :{runtime ? ` ${runtime} minutes` : ` ${results.episode_run_time?.map(item=> item)} minutes`}</p>
                        <div className="genres">
                        <p>Language : {spoken_languages?.map(({name},ind)=> spoken_languages.length-1!=ind? `${name}, ` :`${name}`)}</p>
                        </div>

                        <div className="addfavorite_rate">
                          {
                            useCeckItemIsThere(results) ?
                            <button style={{border:'2px solid green' ,color:'green',cursor:'no-drop'}} disabled ><TiTick/>Added</button> :
                            <button onClick={()=>handleList(results)} ><BiAddToQueue/>Add to list</button>
                          }
                          <p><AiFillStar className="staricon"/>{`${useStringMinimize(JSON.stringify(vote_average),0,3)}/10`}</p>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                 </div>
            </div>
            <div className="cards">
              <Wrapper>
                <Card titile={isProperty?'Similar Movies':'Similar Tv Shows'} result={similarResult}/>
              </Wrapper>
            </div>
          </div>
          )
        }
    </>
  )
}

export default Details

