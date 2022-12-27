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
        .finally(() => setLoading(false)) //cuando termina la peticion al servidor el estado cambia a false, haya o no hayan errores, el finally se ejecuta 

    }, [url]) //cada vez que cambie la url se hara nuevamente el useEffeect ya que estara pendiente del cambio de la url
    
    return {data, error, loading}
}
