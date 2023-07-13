import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


const AgregarProductos = ({setAllproducts, allproducts}) => {

  const navigate = useNavigate()

  /* Crear Producto */ 

  const [counter, setCounter] = useState(allproducts.length + 1);

  const urlRef = useRef()
  const categoriaRef = useRef()
  const nameProductRef = useRef()
  const priceRef = useRef()
  const descripcionRef = useRef()

  const inputRefs = [urlRef, categoriaRef, nameProductRef, priceRef, descripcionRef];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      urlRef.current.value.trim() === '' ||
      categoriaRef.current.value.trim() === '' ||
      nameProductRef.current.value.trim() === '' ||
      priceRef.current.value.trim() === '' 
    ) {

      inputRefs.forEach((ref) => {
        if (ref.current.value.trim() === '') {
          ref.current.parentElement.classList.add('nueva-clase');
        } else {
          ref.current.parentElement.classList.remove('nueva-clase');
        }
      });
      return
    }



    const newProduct = {
      nombre: nameProductRef.current.value.trim(),
      precio: priceRef.current.value.trim(),
      imagen: urlRef.current.value.trim(),
      id: counter + 1,
      categoria: categoriaRef.current.value.trim(),
      descripcion: descripcionRef.current.value.trim(),
    };
  
    const newProducts = [...allproducts, newProduct];

    setAllproducts(newProducts);

    navigate(`/product/${newProduct.id}`)

    setCounter(counter + 1);
  }

  return (
    <section className="agregarProducto">
      <form onSubmit={handleSubmit} className="agregarProducto__form">
        <h3 className="agregarProducto__titulo">Agregar nuevo producto</h3>
        
        <div className="form-contenedor--input actualizar__form-url">
          <input type="text" ref={urlRef} />
        </div>
        <div  className="form-contenedor--input actualizar__form-categoria">
          <input type="text" ref={categoriaRef} />
        </div>
        <div className="form-contenedor--input actualizar__form-nombre"> 
          <input type="text" ref={nameProductRef}/>
        </div>
        <div className="form-contenedor--input actualizar__form-precio">
          <input type="text" ref={priceRef} />
        </div>
        <div className="form-contenedor--input actualizar__form-descripcion">
          <textarea type="text" ref={descripcionRef} placeholder="Descripcion del producto"/>
        </div>
        
        <button className="agregarProducto__btn">Agregar Producto</button>
      </form>
    </section>
  )
}

export default AgregarProductos