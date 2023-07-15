import "../components/Allproducts/style/allproducts.css";
import Product_no_encontrado from "../components/Allproducts/Product_no_encontrado";
import { useNavigate } from "react-router-dom";
import AdminProduct from "../components/Allproducts/AdminProduct";
import { viewNavigate } from "../utils/animationNavigate";

const AllproductsPage = ({ valueInput, allproducts, setAllproducts }) => {

    const handleDelete = (id) => {
        const newProducts = allproducts.filter(producto => producto.id !== id)
        setAllproducts(newProducts)
    }

    // Filtrado por nombre, puede ser modificado
    const filtrado = allproducts.filter((prod) =>
        prod.nombre.includes(valueInput)
    );

    const navigate = useNavigate()

    return (
        <section className='contenedor allproducts'>
            <header className="allproducts__header">
                <h2 className='allproducts__titulo' style={{ color: "var(--gris)" }}>
                    Todos los productos
                </h2>

                <a className="add__producto" onClick={()=> viewNavigate('/agregarProductos',navigate)}>Agregar producto</a>
            </header>
            <div className='productos home__product--category'>
                {filtrado.length === 0 ? (
                    <Product_no_encontrado />
                ) : (
                    filtrado.map((prod) => (
                        <AdminProduct 
                            key={prod.id} 
                            prod={prod} 
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default AllproductsPage;
