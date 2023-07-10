import React from "react";
import { useNavigate } from "react-router-dom";

import '../components/FooterAlura/style/footerAlura.css'

const Footer = () => {

    const navigate = useNavigate()
    const handleNavigateHome = () => {
      navigate('/')
    }

    return (
        <>
            <footer className="footer">
                <div className="footer_margen contenedor">
                    <div className="footer__contenido">
                        <div onClick={handleNavigateHome} className='footer__logo nav__logo--contenedor'>
                            <img className='footer__logo-img nav__logo' src='./logo.svg' alt='logo' />
                            <h2 className='nav__logo--titulo'>
                                <span className='nav-alura'>Alura</span>
                                <span className='nav-geek'>Geek</span>
                            </h2>
                        </div>
                        <ul className="footer__listas-contenedor">
                            <li className="footer__li">Quienes somos</li>
                            <li className="footer__li">Política de privacidad</li>
                            <li className="footer__li">Programa de fidelidad</li>
                            <li className="footer__li">Nuestras tiendas</li>
                            <li className="footer__li">Quiero ser franquiciado</li>
                            <li className="footer__li">Anúncie aquí</li>
                        </ul>
                    </div>
                    <form className="footer__form">
                        <h3 className="footer__form-titulo">Hable con nosotros</h3>
                        <div className="footer__contenedorFormulario">
                            <div className="footer__form-nombre ">
                                <input className="footer__form-w" type="text" placeholder="Nombre"/>
                            </div>
                            <div className="footer__form-msj">
                                <textarea className="footer__form-w" type="text" placeholder="Escribe tu mensaje" />
                            </div>
                        </div>
                        <button className="footer__form-btn">Enviar mensaje</button>
                    </form>
                </div>
            </footer>
            <div className="rodapie">
                <h5 className="rodapie__text">Made with 💙 by Erick 2023</h5>
                <a target="_blank" href="https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/">
                    <img src="./linkedin.svg" alt="logo linkedin" />
                </a>
                <a target="_blank" href="#">
                    <img src="./github.svg" alt="logo git" />
                </a>

            </div>
        </>
    );
};

export default Footer;
