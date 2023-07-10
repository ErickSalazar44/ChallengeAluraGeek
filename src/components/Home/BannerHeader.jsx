import './style/banner.css';

const BannerHeader = () => {
    return (
        <header className='banner'>
            <div className='banner__contenido contenedor'>
                <h1 className='banner__titulo'>Febrero Promocional</h1>
                <p className='banner__ofertas'>productos seleccionados con 33% de descuento</p>
                <a className='banner__verConsolas' href='#'>Ver Consolas</a>
            </div>
        </header>
    );
};

export default BannerHeader;
