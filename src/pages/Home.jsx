import BannerHeader from "../components/Home/BannerHeader"
import TituloProductos from "../components/Home/TituloProductos"
import '../components/Home/style/home.css'
import Productos from "../components/Home/Productos/Productos"


const Home = ({allproducts}) => {
    const productosPorCategoria = [ ...new Set(allproducts.map((prod) => prod.categoria))]

  return (
    <div>
      <BannerHeader/>
      <section className="home__section">
        {
          productosPorCategoria.map(categoria => (
            <div id={categoria.split(" ").join("")} className="home__product--category contenedor" key={categoria}>
              <TituloProductos titulo={categoria}/>
              <Productos productos={allproducts.filter(prod => prod.categoria === categoria)}/>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Home