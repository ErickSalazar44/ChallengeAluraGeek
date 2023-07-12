import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const AgregarProductos = () => {

  const [date, setDate] = useState()

  const {id} = useParams()

  useEffect(() => {
    if (id) {
      
    }
  }, [id])
  


  return (
    <div>AgregarProductos</div>
  )
}

export default AgregarProductos