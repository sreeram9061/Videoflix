import { useFetch } from "../customHocks/useFetch"

const Card = ({titile}) => {
   const [results,errorInfo]= useFetch('/movie/popular',{page:1})
   console.log(results)
  return (
    <div className="cardsection">
        <h2>{titile}</h2>
        <div className="cardcontainer">
            {
                results.map(item=>
                    <img src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`} alt="" />
                    )
            }
        </div>
    </div>
  )
}

export default Card
