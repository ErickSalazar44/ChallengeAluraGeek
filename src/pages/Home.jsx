import BannerHeader from "../components/Home/BannerHeader"
import TituloProductos from "../components/Home/TituloProductos"
import '../components/Home/style/home.css'
import Productos from "../components/Home/Productos/Productos"
import data from '/db.json'

const Home = () => {
    const productosPorCategoria = [ ...new Set(data.productos.map((prod) => prod.categoria))]

  return (
    <div>
      <BannerHeader/>
      <section className="home__section">
        {
          productosPorCategoria.map(categoria => (
            <div className="home__product--category contenedor" key={categoria}>
              <TituloProductos titulo={categoria}/>
              <Productos productos={data.productos.filter(prod => prod.categoria === categoria)}/>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Home