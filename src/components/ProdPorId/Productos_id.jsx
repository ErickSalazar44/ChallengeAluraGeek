import './style/prod_id.css'

const Productos_id = ({producto}) => {
  return (
    <article className="prod__id contenedor">
            <img 
              className="prod__id-img" 
              src={producto.imagen} 
              alt={producto.nombre} 
              style={{viewTransitionName: `imagen-${producto.id}`}} 
            />
        <div className="prod__id-body">
            <h3 className="prod__id-body--titulo">{producto.nombre}</h3>
            <p className="prod__id-body--precio"><strong>${producto.precio}</strong></p>
            <p className="prod__id-body--descripcion">
                {producto.descripcion}
            </p>
        </div>
    </article>
  )
}

export default Productos_id