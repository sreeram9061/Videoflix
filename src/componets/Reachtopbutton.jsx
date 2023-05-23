import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const Reachtopbutton = () => {

  const topButton=useRef()
  const [isScreanOnTop,setIsScreanOnTop]=useState(true)
  
  const handleScroll=()=>{
    if(document.documentElement.scrollTop >180 || document.body.scrollTop > 180){
        setIsScreanOnTop(false)
    }else{
        setIsScreanOnTop(true)
    }
  }

  const handleTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;        
  }



  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      handleScroll()
    })

/*   window.addEventListener('resize',()=>{
       if(window.innerWidth<940){
       }
    }) */
  })  
  return (
    <div ref={topButton}  style={ isScreanOnTop ? {display:'none'} : {display:'flex'}} className="topbtn">
        <div className="container">
           <button onClick={handleTop} className="reachtopbutton">
             <FaLongArrowAltUp className="icons"/>
           </button>
        </div>
    </div>
  )
}

export default Reachtopbutton
