import './styles/index.scss'
import './styles/mediaquery.scss'
import Globlefile from "./context/Globlefile"
import Home from './pages/Home'
import Header from './componets/Header'
import Mobileslider from './componets/Mobileslider'
function App() {
  return (
    <div className="App">
      <Globlefile>
      <Header/>
      <Mobileslider/>
      <Home/>
      </Globlefile>

    </div>
  )
}
export default App
