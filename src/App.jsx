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
import Reachtopbutton from './componets/Reachtopbutton'
import Toprated from './pages/Toprated'
import Mylist from './pages/Mylist'
import Searchbar from './componets/Searchbar'
import OutleMovie from './componets/OutleMovie'
import OutletTvshows from './componets/OutletTvshows'
import Details from './pages/Details'
import OutletMylist from './componets/OutletMylist'

function App() {
 
  return (
    <div className="App" >
      <Globlefile>
      <Header/>
      <Searchbar/>
      <div className="loackeditems">
      <Reachtopbutton/>
        <Mobileslider/>
      </div>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/:id" element={<Details/>}/>
           
           <Route path="/Movies" element={<OutleMovie/>}>
             <Route index element={<Singlecardpag title={'Movies'}/>}/>
             <Route path=":id" element={<Details/>}/>
           </Route>

           <Route path="/TvShows" element={<OutletTvshows/>}>
             <Route index element={<Singlecardpag title={'Tv shows'} />} />
             <Route path=":id" element={<Details/>}/>
           </Route>
           <Route path="/TopRating" element={<OutletTvshows/>}>
              <Route index element={<Toprated/>}/>
              <Route path=":id" element={<Details/>}/>
           </Route>


           <Route path="/Mylist" element={<OutletMylist/>} >
               <Route index element={<Mylist/>}/>
               <Route path=":id" element={<Details/>}/>
           </Route>

         </Routes>
      </Globlefile>
      <Footer/>
    </div>
  )
}
export default App
