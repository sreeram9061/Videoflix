import { useEffect, useRef } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { reachTop } from "../customHocks/reachTop";
const Reachtopbutton = () => {

  const topButton=useRef()

  const handleReachTop =()=>{
    const scroollPosition= document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-140

    if(window.matchMedia("(max-width: 940px)").matches && scroollPosition ){
      topButton.current.style.transform= 'translateY(50px)'
    }else{
      topButton.current.style.transform= 'translateY(0)'
    }

    if(document.documentElement.scrollTop >180 || document.body.scrollTop > 180){
      topButton.current.style.display='flex'
    }else{
      topButton.current.style.display='none'
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleReachTop)
    return()=>{
      window.removeEventListener("scroll",handleReachTop) 
    }
  })

  return (
    <div ref={topButton}   className="topbtn">
        <div className="container">
           <button onClick={reachTop} className="reachtopbutton">
             <FaLongArrowAltUp className="icons"/>
           </button>
        </div>
    </div>
  )
}

export default Reachtopbutton
