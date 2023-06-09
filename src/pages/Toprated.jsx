import { useMemo, useState } from "react"
import Backdropcard from "../componets/Backdropcard"
import Wrapper from "../componets/Wrapper"
import { useFetch } from "../customHocks/useFetch"
import { topRatedStates } from "../context/Globlefile"
import { useContext } from "react"
import Loading from "../componets/Loading"
import Errorcom from "../componets/Errorcom"
import { reachTop } from "../customHocks/reachTop"
const Toprated = () => {

 const [itemNavigate,setItemNavigate,page,setPage]= useContext(topRatedStates)
 
  useMemo(()=>reachTop(),[])
  
    const[data,dataError,dataLoader]= itemNavigate ? 
    useFetch('/movie/top_rated',{page}) :
    useFetch('/tv/top_rated',{page})

    const handleNavigateMovieTv=()=>{
      setItemNavigate(pre=> !pre)
      setPage(1)
    }
   
  return (
    <>
      <div className="toprated">
      {dataLoader && <Loading/>}
      {dataError && <Errorcom Error={dataError}/>}
      {!dataLoader && !dataError &&(
                  <Wrapper>
                  <div className="moviecontainer gridCont">
                     <div className="Navigateitems">
                      <div onClick={handleNavigateMovieTv} className="title">
                        <h3 style={itemNavigate ?  {backgroundColor:'rgb(221, 28, 28)'} : null} className="btnTitle " >Movie</h3>
                        <h3 style={!itemNavigate ?  {backgroundColor:'rgb(221, 28, 28)'} : null}  className="btnTitle " >Tv Shows</h3>
                      </div>
                     </div>
                    <div className="container">
                    {
                      data?.filter(item => item.backdrop_path).map(item=>
                          <Backdropcard key={item.id} item={item} />
                      )
                    }
                    </div>
                    <div className="pagenation">
                      <button disabled={page <= 1} onClick={()=>setPage(pre=> pre-1)}>Pre</button>
                      <p>{page}</p>
                      <button  onClick={()=>setPage(pre=> pre+1)} >Next</button>
                    </div>
                  </div>
                </Wrapper>
              )}
          </div>  
    </>
  )
}

export default Toprated