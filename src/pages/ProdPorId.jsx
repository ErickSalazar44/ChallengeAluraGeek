import { useParams } from "react-router-dom"
import data from '/db.json'
import Productos_id from "../components/ProdPorId/Productos_id"
import SimilarProductos from "../components/ProdPorId/SimilarProductos"

const ProdPorId = () => {

  const {id} = useParams()
  
  /* Detalles del producto */
  const producto = data.productos.filter(prod => prod.id == id)

  /* Productos similares */

  const productosSimilares = data.productos.filter(prod => prod.categoria == producto[0].categoria)

  

  return (
    <main>
      <Productos_id producto={producto[0]}/>
      <SimilarProductos productosSimilares={productosSimilares} id={id}/>
    </main>
  )
}

export default ProdPorId