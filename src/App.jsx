import './styles/index.scss'
import './styles/mediaquery.scss'
import Globlefile from "./context/Globlefile"
import Home from './pages/Home'
import Header from './componets/Header'
import Mobileslider from './componets/Mobileslider'
import Footer from './componets/Footer'
import MovieDetails from './pages/Details'
import { Route, Routes } from "react-router-dom"
import Singlecardpag from './pages/Singlecardpag'
function App() {
 
  return (
    <div className="App" >
      <Globlefile>
      <Header/>
     <Mobileslider/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Details/:id" element={<MovieDetails/>}/>
           <Route path="/Movies" element={<Singlecardpag title={'Movies'}/>}/>
           <Route path="/TvShows" element={<Singlecardpag title={'Tv shows'}/>}/>
         </Routes>
      </Globlefile>
      <Footer/>
    </div>
  )
}
export default App
