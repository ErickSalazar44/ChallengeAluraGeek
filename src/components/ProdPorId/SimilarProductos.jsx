import Product from "../Home/Productos/Product";
import './style/similarProductos.css'

const SimilarProductos = ({ productosSimilares, id }) => {
    return (
        <article className='contenedor similarProductos'>
            <h2 style={{color: 'var(--gris)'}}>Productos Similares</h2>
            <div className="productos">
                {
                    productosSimilares.filter(producto => producto.id != id).map(prod => (
                        <Product key={prod.id} prod={prod}/>
                    ))
                }
            </div>
        </article>
    );
};

export default SimilarProductos;
