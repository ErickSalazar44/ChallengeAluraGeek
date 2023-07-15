import { useNavigate } from 'react-router-dom';
import './style/banner.css';
import { useState } from 'react';
import { viewNavigate } from '../../utils/animationNavigate';

const BannerHeader = () => {
    const navigate = useNavigate()
    const [navBanner, setNavBanner] = useState(1)



    return (
        <header className={`banner banner_${navBanner}`}>
            <div className='banner__contenido contenedor'>
                <h1 className='banner__titulo'>Julio Promocional</h1>
                <p className='banner__ofertas'>productos seleccionados con 33% de descuento</p>
                <a onClick={()=> viewNavigate('/product/7',navigate)} className='banner__verConsolas'>Ver Consolas</a>
            </div>
            <nav className='banner__nav-content'>
                <span onClick={ ()=> setNavBanner(1)} className={`banner_nav  ${navBanner !== 1 ? '' : 'banner_nav--select'}`}></span>
                <span onClick={()=> setNavBanner(2)} className={`banner_nav ${navBanner !== 2 ? '' : 'banner_nav--select'}`}></span>
                <span onClick={ ()=> setNavBanner(3)} className={`banner_nav ${navBanner !== 3 ? '' : 'banner_nav--select'}`}></span>
            </nav>
        </header>
    );
};

export default BannerHeader;
