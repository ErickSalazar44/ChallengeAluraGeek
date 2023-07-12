import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import '../components/AgregarProduct/style/agregarProduct.css'



const ActualizarProducto = ({allproducts, setAllproducts}) => {

    const navigate = useNavigate()

    //? traemos el valor del id 
    const {id} = useParams()

    //? sacamos los valores del id 
    const update = allproducts.find((prod) => prod.id === id);

    //? estado que guarda los valores del id 
    const [formValues, setFormValues] = useState(update);

    //! Funcion para actualizar el id 
    const handleSubmit = (e) => {
        e.preventDefault()
        setAllproducts((prevProducts) =>
            prevProducts.map((prod) => (prod.id === id ? formValues : prod))
        );

        navigate(`/product/${id}`)
    }

    //? capturar valores de los input y almacendarlos en un estado
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value });
    }


    return (
        <section className='agregarProducto'>
            <form onSubmit={handleSubmit} className='agregarProducto__form'>
                <h3 className='agregarProducto__titulo'>
                    Actualizar producto
                </h3>
                <div className="form-contenedor--input actualizar__form-url">
                    <input 
                        type='text' 
                        value={formValues.imagen}
                        name="imagen" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-contenedor--input actualizar__form-categoria">
                    <input 
                        type='text' 
                        value={formValues.categoria} 
                        name="categoria"  
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-contenedor--input actualizar__form-nombre">
                    <input
                        value={formValues.nombre}
                        name='nombre'
                        type='text'
                        onChange={handleChange}
                    />
                </div>
                <div className="form-contenedor--input actualizar__form-precio">
                    <input
                        value={formValues.precio}
                        name='precio'
                        type='text'
                        onChange={handleChange}
                    />
                </div>
                <div className="form-contenedor--input actualizar__form-descripcion">
                    <textarea
                        value={formValues.descripcion}
                        name='descripcion'
                        type='text'
                        placeholder='Descripcion del producto'
                        onChange={handleChange}
                    />
                </div >
                <button className='agregarProducto__btn'>
                    Actualizar Producto
                </button>
                <table></table>
            </form>
        </section>
    );
};

export default ActualizarProducto;
