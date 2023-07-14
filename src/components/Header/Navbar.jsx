import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style/navbar.css";
import { useRef } from "react";

const Navbar = ({ setValueInput, valueInput }) => {
    const navigate = useNavigate();

    const inputValue = useRef()

    // para saber si me encuentro en login 
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isAllProductPage = location.pathname === '/allproducts';

    const handleNavigateHome = () => {
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue.current.value = '';
    };

    const handleInputValor = (e) => {
        navigate("/allproducts");
        setValueInput(e.target.value)
    }

    const resetValue = () => {
        inputValue.current.value = ''
        setValueInput('')
    }

    return (
        <nav className='nav__contenedor contenedor'>
            <div onClick={handleNavigateHome} className='nav__logo--contenedor'>
                <img className='nav__logo' src='./logo.svg' alt='logo' />
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
                                src='./lupa.svg'
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
                    {/* buscador movil */}
                    {/* <div className='nav__buscador-movil'>
                        <svg
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M12.4999 11H11.7099L11.4299 10.73C12.6299 9.33 13.2499 7.42 12.9099 5.39C12.4399 2.61 10.1199 0.39 7.31989 0.05C3.08989 -0.47 -0.470107 3.09 0.0498932 7.32C0.389893 10.12 2.60989 12.44 5.38989 12.91C7.41989 13.25 9.32989 12.63 10.7299 11.43L10.9999 11.71V12.5L15.2499 16.75C15.6599 17.16 16.3299 17.16 16.7399 16.75C17.1499 16.34 17.1499 15.67 16.7399 15.26L12.4999 11ZM6.49989 11C4.00989 11 1.99989 8.99 1.99989 6.5C1.99989 4.01 4.00989 2 6.49989 2C8.98989 2 10.9999 4.01 10.9999 6.5C10.9999 8.99 8.98989 11 6.49989 11Z'
                                fill='#464646'
                            />
                        </svg>
                    </div> */}
                </form>
                {!isLoginPage && !isAllProductPage 
                ? (
                    <Link className='nav__login btn_animate' to='/login'>
                        Login
                    </Link>
                ) :
                <></>
                }
            </div>
        </nav>
    );
};

export default Navbar;
