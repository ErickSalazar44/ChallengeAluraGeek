import Product from "./Product";
import "./style/productos.css";

const Productos = ({ productos }) => {

    return (
        <div className='productos'>
            {
                productos.map(prod => (
                    <Product key={prod.id} prod={prod}/>
                ))
            }
        </div>
    );
};

export default Productos;
