import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url,custoumParams={})=>{
   const [results,setResults] =useState([])
   const [errorInfo,setError] =useState(null)
   const [loading,setLoading]=useState(true)
   const{page,query}=custoumParams

   const option={
       method:'get',
       baseURL:"https://api.themoviedb.org/3/",
       url,
       params:{
           api_key:"7d80238ae1ecc707de39df52d68ae4a5",
           ...custoumParams
       }
   }

    useEffect(()=>{
        const fetch= async ()=>{
            try {
                const respons = await axios(option)
                respons.data.results ?
                setResults(respons.data.results) : setResults(respons.data)
                setLoading(false)
            }catch (error){
                setError(error.message)
                setLoading(false)
            }
        }
        fetch()
    },[page,url,query])
    return [results,errorInfo,loading]
    
}