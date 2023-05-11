
import { useContext, useEffect, useRef } from "react"
import { globalData } from "../context/Globlefile"
function Mobileslider() {
  const [navStatusState,]=useContext(globalData)
  let mobileNav=useRef()
  useEffect(()=>{
    !navStatusState ?
    mobileNav.current.style.display='none':
    mobileNav.current.style.display='flex'
  },[navStatusState])

  return (
    <div ref={mobileNav} className="mobileslider">
      <p>Tv shows</p>
      <p>Movies</p>
      <p>Top rating</p>
      <p>Favorite</p>
    </div>
  )
}

export default Mobileslider
