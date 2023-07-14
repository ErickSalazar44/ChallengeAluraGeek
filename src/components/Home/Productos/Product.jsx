import { useNavigate } from 'react-router-dom';
import './style/producto.css'

const Product = ({ prod }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        window.scrollTo(0,0)
        navigate(`/product/${prod.id}`)
    }
    
    return (
        <article className="prod">
            <figure style={{overflow:'hidden'}}>
                <img onClick={handleNavigate} className="prod__img" src={prod.imagen} alt={prod.name} />
            </figure>
            <footer className="prod__body">
                <h4 className="prod__title">{prod.nombre}</h4>
                <p className="prod__price">
                    <strong>R${prod.precio}</strong>
                </p>
                <p onClick={handleNavigate} className="prod__verProducto">Ver producto</p>
            </footer>
        </article>
    );
};

export default Product;
