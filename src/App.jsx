import './styles/index.scss'
import './styles/mediaquery.scss'
import Globlefile from "./context/Globlefile"
import Home from './pages/Home'
import Header from './componets/Header'
import Mobileslider from './componets/Mobileslider'
import Footer from './componets/Footer'
import { useEffect } from 'react'
function App() {

  useEffect(()=>{
    document.addEventListener('scroll',(e)=>{
    })
  })


  return (
    <div className="App" >
      <Globlefile>
      <Header/>
      <Mobileslider/>
      <Home/>
      </Globlefile>
      <Footer/>
    </div>
  )
}
export default App
