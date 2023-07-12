import { useNavigate } from 'react-router-dom';
import './style/banner.css';

const BannerHeader = () => {

    const navigate = useNavigate();

    const handleRutaOfertas = () => {
        navigate('/product/7')
    }

    return (
        <header className='banner'>
            <div className='banner__contenido contenedor'>
                <h1 className='banner__titulo'>Febrero Promocional</h1>
                <p className='banner__ofertas'>productos seleccionados con 33% de descuento</p>
                <a onClick={handleRutaOfertas} className='banner__verConsolas'>Ver Consolas</a>
            </div>
        </header>
    );
};

export default BannerHeader;
