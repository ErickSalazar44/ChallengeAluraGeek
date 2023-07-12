import "../components/Allproducts/style/allproducts.css";
import Product_no_encontrado from "../components/Allproducts/Product_no_encontrado";
import { Link } from "react-router-dom";
import AdminProduct from "../components/Allproducts/AdminProduct";

const AllproductsPage = ({ valueInput, allproducts, setAllproducts }) => {

    const handleDelete = (id) => {
        const newProducts = allproducts.filter(producto => producto.id !== id)
        setAllproducts(newProducts)
    }

    // Filtrado por nombre, puede ser modificado
    const filtrado = allproducts.filter((prod) =>
        prod.nombre.includes(valueInput)
    );



    return (
        <section className='contenedor allproducts'>
            <header className="allproducts__header">
                <h2 className='allproducts__titulo' style={{ color: "var(--gris)" }}>
                    Todos los productos
                </h2>

                <Link className="add__producto" to='/agregarProductos'>Agregar producto</Link>
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
