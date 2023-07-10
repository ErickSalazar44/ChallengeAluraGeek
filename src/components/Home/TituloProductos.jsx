import "./style/titleProduct.css";

const TituloProductos = ({ titulo }) => {
    return (
        <div className="titleProduct__contenedor">
            <h3 className="titleProduct">{titulo}</h3>
            <a className="titleProduct__contenedor--vt" href='#'>
                <span className="titleProduct__ver-todo">Ver todo </span>
                {/* icon =>*/}
                <svg className="titleProduct__icon" xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <g clipPath='url(#clip0_1_509)'>
                        <path d='M2.66634 8.66666L10.7797 8.66667L7.05301 12.3933L7.99967 13.3333L13.333 8L7.99968 2.66667L7.05968 3.60667L10.7797 7.33333L2.66634 7.33333L2.66634 8.66666Z' fill='#2A7AE4'/>
                    </g>
                    <defs>
                        <clipPath id='clip0_1_509'>
                            <rect width='16' height='16' fill='white' />
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    );
};

export default TituloProductos;
