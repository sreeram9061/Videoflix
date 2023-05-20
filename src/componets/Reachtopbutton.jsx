import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const Reachtopbutton = () => {

  const topButton=useRef()
  const [isScreanOnTop,setIsScreanOnTop]=useState(true)
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  
  useEffect(() =>{
    //set initial value
    const {matches} = window.matchMedia("(max-width: 650px)")
    //watch for updates
    matches ? setIsNarrowScreen(true): setIsNarrowScreen(false);
    console.log(matches)
  })

  const handleScroll=()=>{
    if(document.documentElement.scrollTop >180 || document.body.scrollTop > 180){
        setIsScreanOnTop(false)
    }else{
        setIsScreanOnTop(true)
    }
  }
  const handleScrenisNowBottom=()=>{
    if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-140){
        topButton.current.style.bottom='10px'
    }else{
        topButton.current.style.bottom='70px'
    }
  }

  const handleTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;        
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        handleScroll()
        isNarrowScreen && handleScrenisNowBottom()
    }); 
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
