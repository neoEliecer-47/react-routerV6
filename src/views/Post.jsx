import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const Post = () => {
    //objeto 
const param = useParams() //para leer el parametro que se le coloco en el post route que se encuentra en el index  
  
const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`) 


if(loading){
    return <h2>Loading...</h2>
  }

  if(error !== ''){
    return <h2>{error}</h2>
  }


return (
    <div>
        <h3>{param.id} - {data.title}</h3>
        <p>{data.body}</p>
    
    </div>
  )
}

export default Post