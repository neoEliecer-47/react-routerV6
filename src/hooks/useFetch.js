import { useEffect, useState } from "react"


export const useFetch = (url) => {
  
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {

  setLoading(true)//minetras cargue el fetch el estado de loading estara en True
    fetch(url)
        .then((res) => res.json())
        .then(data => setData(data))
        .catch(e => setError('Error del servidor'))
        .finally(() => setLoading(false)) //cuando termina la peticion al servidor el estado cambia a false

    }, [url])
    
    return {data, error, loading}
}
