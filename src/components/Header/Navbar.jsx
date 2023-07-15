import { useLocation, useNavigate } from "react-router-dom";
import "./style/navbar.css";
import { useRef } from "react";
import { viewNavigate } from "../../utils/animationNavigate";

const Navbar = ({ setValueInput, valueInput }) => {
    const navigate = useNavigate();

    const inputValue = useRef()

    // para saber si me encuentro en login 
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isAllProductPage = location.pathname === '/allproducts';

    const handleNavigateHome = () => {
        viewNavigate('/',navigate)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue.current.value = '';
    };

    const handleInputValor = (e) => {
        viewNavigate("/allproducts",navigate);
        setValueInput(e.target.value)
    }

    const resetValue = () => {
        inputValue.current.value = ''
        setValueInput('')
    }

    return (
        <nav className='nav__contenedor contenedor'>
            <div onClick={handleNavigateHome} className='nav__logo--contenedor'>
                <img className='nav__logo' src='/logo.svg' alt='logo' />
                <h2 className='nav__logo--titulo'>
                    <span className='nav-alura'>Alura</span>
                    <span className='nav-geek'>Geek</span>
                </h2>
            </div>
            <div className='nav__content'>
                <form onSubmit={handleSubmit} className='nav__buscador'>
                    {/* buscador pc */}
                    <div className='nav__buscador-pc'>
                        <span className='nav__buscador-pc--lupa'>
                            <img
                                onClick={resetValue}
                                className='nav__lupa-pc'
                                src='/lupa.svg'
                                alt='lupa'
                            />
                        </span>
                        <input
                            value={valueInput}
                            onChange={handleInputValor}
                            className='nav__buscador-pc--input'
                            type='text'
                            placeholder='¿Qué deseas buscar?'
                            ref={inputValue}
                        />
                    </div>
                </form>
                {!isLoginPage && !isAllProductPage 
                ? (
                    <a className='nav__login btn_animate' onClick={() => viewNavigate('/login',navigate)}>
                        Login
                    </a>
                ) :
                <></>
                }
            </div>
        </nav>
    );
};

export default Navbar;
