import './styles/index.scss'
import './styles/mediaquery.scss'
import Globlefile from "./context/Globlefile"
import Home from './pages/Home'
import Header from './componets/Header'
import Mobileslider from './componets/Mobileslider'
import Footer from './componets/Footer'
function App() {
  return (
    <div className="App">
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
