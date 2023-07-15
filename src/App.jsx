import { Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllproductsPage from "./pages/AllproductsPage";
import AgregarProductos from "./pages/AgregarProductos";
import Navbar from "./components/Header/Navbar";
import ProdPorId from "./pages/ProdPorId";
import Footer from "./pages/Footer";
import { useState } from "react";
import { productos } from "/db.json";
import ActualizarProducto from "./pages/ActualizarProducto";


function App() {
    /* almacena el value del input */
    const [valueInput, setValueInput] = useState("");

    /* estado para manejar los productos */
    const [allproducts, setAllproducts] = useState(productos);


    return (
        <div className='main'>
            <Navbar setValueInput={setValueInput} valueInput={valueInput} />
            <Routes>
                {/* Ruta principal */}
                <Route path='/' element={<Home allproducts={allproducts} />} />

                {/* Ruta Login */}
                <Route path='/login' element={<Login />} />

                {/* Ruta especificaciones del producto */}
                <Route
                    path='/product/:id'
                    element={<ProdPorId allproducts={allproducts} />}
                />

                {/* Ruta todos los productos  */}
                <Route
                    path='/allproducts'
                    element={
                        <AllproductsPage
                            valueInput={valueInput}
                            allproducts={allproducts}
                            setAllproducts={setAllproducts}
                        />
                    }
                />
                
                {/* Ruta editar productos */}
                <Route
                    path='/edit/:id'
                    element={<ActualizarProducto
                    allproducts={allproducts}
                    setAllproducts={setAllproducts}
                    />}
                />
                
               {/* Ruta Agregar Productos */}
                <Route
                    path='/agregarProductos'
                    element={<AgregarProductos
                    allproducts={allproducts}
                    setAllproducts={setAllproducts}/>}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
