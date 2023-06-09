import CardMylist from "../componets/CardMylist"
import Wrapper from "../componets/Wrapper"
import { useContext, useEffect, useMemo, useRef } from "react";
import { checkPropertyMylist, myLystContext } from "../context/Globlefile";
import { reachTop } from "../customHocks/reachTop";


const Mylist = () => {
  useMemo(()=>reachTop(),[])

  const [list,listDispatch]=useContext(myLystContext)
  const [property,setProperty]=useContext(checkPropertyMylist)
  const {propertyName}=property

  let rand=useRef()
  let movie=useRef()
  let tvshow=useRef()
  const refs=[rand,movie,tvshow]

  const refsStore=(ref)=>{
    refs.map(item=>{
      if(item.current==ref){
        item.current.style.backgroundColor='white'
        item.current.style.color='black'
      }else{
        item.current.style.backgroundColor='#3a3746'
        item.current.style.color='white'
      }
    })
  }

  useEffect(()=>{
    if( propertyName ==null){
      refsStore(rand.current)
     }else if(propertyName=='title'){
        refsStore(movie.current)
     }else if(propertyName=='name'){
       refsStore(tvshow.current)
     }
  },[])

  const handleProperty=(pr,ref)=>{
    setProperty({
      propertyName:pr,
      reference:ref.current
    })
    refsStore(ref.current)
  }
  
  return (
    <Wrapper>
       <div className="mylist">
        <div className="sortBtns">
          <button ref={rand} onClick={()=>handleProperty(null,rand)}>Random</button>
          <button ref={movie} onClick={()=>handleProperty('title',movie)} >Movies</button>
          <button ref={tvshow} onClick={()=>handleProperty('name',tvshow)} >Tv Shows</button>
        </div>
        {
          
          list.length==0 ?(
          <div className="emty">
            <h2>List is Empty</h2>
          </div>
          ) : (
            <div className="mylistcontainer">
            {
              list?.map(item=>(
               (item.hasOwnProperty(propertyName) || propertyName==null) &&
                <CardMylist key={item.id} data={item} listDispatch={listDispatch}/>
              ))
            }
            </div>
          )
        }

       </div>
    </Wrapper>
  )
}

export default Mylist