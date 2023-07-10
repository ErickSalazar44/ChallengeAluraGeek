import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import AllproductsPage from "./pages/AllproductsPage";
import AgregarProductos from "./pages/AgregarProductos";
import Navbar from "./components/Header/Navbar";
import ProdPorId from "./pages/ProdPorId";
import Footer from "./pages/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProdPorId />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path='/Allproducts' element={<AllproductsPage />} />
                    <Route
                        path='/AgregarProductos'
                        element={<AgregarProductos />}
                    />
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
