import './style/productoNoEncontrado.css'

const Product_no_encontrado = () => {
    return (
        <div className='productoNoEncontrado'>
            <img
                src='./producto_no_encontrado.svg'
                alt='producto no encontrado'
            />
            <h2>Productos No encontrado</h2>
        </div>
    );
};

export default Product_no_encontrado;
