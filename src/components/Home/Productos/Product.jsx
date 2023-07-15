import { useNavigate } from 'react-router-dom';
import './style/producto.css'
import { viewNavigate } from '../../../utils/animationNavigate';

const Product = ({ prod }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        viewNavigate(`/product/${prod.id}`,navigate)
    }

    return (
        <article className="prod">
            <div style={{overflow:'hidden'}}>
                <img 
                    onClick={handleNavigate} 
                    className="prod__img" 
                    src={prod.imagen} 
                    alt={prod.name}                
                />
            </div>
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
