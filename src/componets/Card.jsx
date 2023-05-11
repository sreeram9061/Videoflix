import { useFetch } from "../customHocks/useFetch"

const Card = ({titile}) => {
   const [results,errorInfo]= useFetch('/movie/popular',{page:1})
   console.log(results)
  return (
    <div className="cardsection">
        <h2>{titile}</h2>
      
    </div>
  )
}

export default Card
