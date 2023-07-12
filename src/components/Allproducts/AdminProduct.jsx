import React from "react";
import './style/adminProduct.css'
import { useNavigate } from "react-router-dom";

const AdminProduct = ({ prod, onDelete }) => {

    const navigate = useNavigate()

    const handleDelete = (id) => {
        onDelete(id)
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <article className='prod'>
            <div className="prod__img-contenedor">
                <img className='prod__img' src={prod.imagen} alt={prod.name} />
                <div className="admin__comand">
                    <span onClick={()=> handleDelete(prod.id)} className="delete">
                        <svg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z' fill='white'/>
                        </svg>
                    </span>
                    <span onClick={()=> handleEdit(prod.id)} className="edit">
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_1_1590)'>
                                <path d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z' fill='white'/>
                            </g>
                            <defs>
                                <clipPath id='clip0_1_1590'>
                                    <rect width='24' height='24' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>
            </div>
            <footer className='prod__body'>
                <h4 className='prod__title'>{prod.nombre}</h4>
                <p className='prod__price'>
                    <strong>R${prod.precio}</strong>
                </p>
                <p className='prod__verProducto'>Ver producto</p>
            </footer>
        </article>
    );
};

export default AdminProduct;
