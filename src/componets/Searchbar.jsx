import { ImCross } from "react-icons/im";
import { searchboxContext } from "../context/Globlefile";
import { useContext, useRef, useState } from "react";
import { useFetch } from "../customHocks/useFetch";
import { useStringMinimize } from "../customHocks/useStringMinimize";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
    const closbtn= useRef()
    const navigate=useNavigate()
    const [textBoxQuery,setTextBoxQuery]=useState('')
    const [isSearchbox,setIsSearchbox]=useContext(searchboxContext)
    const[typeOfFetching,setTypeOfFetching]=useState(true)

    const [results,errorInfo,loading]=useFetch(typeOfFetching ? 'search/movie' : 'search/tv',{query:textBoxQuery})

    const handleCloss=(val)=>{
      if(val==closbtn || val.target.children.length==1){
        setTextBoxQuery('')
        setIsSearchbox(false)
      }
    }
    isSearchbox ? document.body.style.overflow='hidden' : document.body.style.overflow='auto'

    const handleFetchs=(cont)=>{
      setTextBoxQuery('')
      setTypeOfFetching(cont)
    }

    const handleMovieDetails=(id,item)=>{
      setTextBoxQuery('')
      setIsSearchbox(false)
      navigate(`/Details/${id}`)
      localStorage.setItem('ItemOfDetails',JSON.stringify(item))
    }

  return (
    <div onClick={(e)=>handleCloss(e)} className="search" style={ isSearchbox ? {display:'flex'} : {display:'none'}}>
        
        <div className="container">
            <div className="topsection">
                <div className="innercontainer">
                   <button onClick={()=>handleFetchs(true)}
                    style={typeOfFetching ? {backgroundColor:'white',color:'black'}:null}>Movie</button>
                   <button onClick={()=>handleFetchs(false)}
                    style={!typeOfFetching ? {backgroundColor:'white',color:'black'}:null} >Tv show</button>
                </div>
                <button ref={closbtn} onClick={()=>handleCloss(closbtn)}><ImCross/></button>
            </div>
            <input value={textBoxQuery}
             onChange={(e)=>setTextBoxQuery(e.target.value)}
             className="searchbox" placeholder="Search" type="search" />
            <div className="resultdata">
              <ul>
              {
                results?.map(item=>(
                  <li onClick={()=>handleMovieDetails(item.id,item)} >
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    <div className="discreption">
                    <h3>{ typeOfFetching ? item.title : item.name}</h3>
                    
                    <p>{useStringMinimize(typeOfFetching ? item.release_date : item.first_air_date ,0,4)}</p>
                    </div>
                  </li>
                ))
              }
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Searchbar
