import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url,custoumParams={})=>{
   const [results,setResults] =useState([])
   const [errorInfo,setError] =useState('')
    const{page}=custoumParams

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
                setResults(respons.data.results)
            }catch (error){
                setError(error.message)
            }
        }
        fetch()
    },[page])

    return [results,errorInfo]
}