import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const Blog = () => {
  
  let [searchParams, setSearchParams] = useSearchParams() //para hacer una query y buscar informcion mandandole un valor,'?' en el browser
  
 /*useEffect(() => {
  console.log(searchParams.get('hola'))
 }, [searchParams])*/ 
 
 
 const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/posts")

  if(loading){
    return <h2>Loading...</h2>
  }

  if(error !== ''){
    console.log('ERROR de servidor')
    return <h2>Post no encontrado</h2>
  }
  
  const handleChange = e => {
    let filtro = e.target.value

    if(filtro){
      setSearchParams({ filtro })
    }else {
      setSearchParams({  })
    }

  }
  
  
  return ( 
    <div>
      <h2>Blog</h2>
      
      <input
        type="text"
        className="form-control mb-2" 
        value={searchParams.get('filtro') || ''} //el value para hacer busquedas en tiempo real; en caso de que no exista el filter, mandar un string vacio
        onChange={handleChange}
        placeholder="buscar post"
      />

      {
          data.filter(item => {
            let filtro = searchParams.get('filtro') //almecenammos el valor del filtro en el query del browser (un array), tipìado por el usuario
          if(!filtro) return true//en caso de que no existe el rsultado tipiado por el usuario en el input, devolvemos el current actual y continua con la siguiente vuelta

          let title = item.title.toLowerCase()
          return title.startsWith(filtro.toLowerCase()) //esto devuelve un true o un false
          //en caso de que sea verdadero, quiere decir que coincide el title con lo qe escribio el usuario en el filtro, asi solo sean algunos caracteres
          //en caso de falso lo excluye
          
          }).map((item) =>(
              <h5 key={item.id}>
                <Link to={`${item.id}`}>{item.id} - {item.title} </Link>
                
                
              </h5>
            
            ))
        }
    </div>
  )
}

export default Blog