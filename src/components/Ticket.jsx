import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Ticket = ({id, buyer, items, total}) => {

    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleFinish = () => {
        clearCart();
        navigate('/');
    }

    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
            <div className="card p-4">
                <h5 className='text-center card-title mb-3'>El identificador de su compra es <i className='border rounded p-2'>{id}</i></h5>
                <p>A nombre de <i>{buyer.name}</i></p>
                {
                    items.map((e,i) => <p key={i}>Ariculo: <i>{e.name}</i> | Cantidad: <i>{e.quantity}</i> | Precio: <i>{e.price}</i></p>)
                }
                <strong>Total de compra: $<i>{total}</i></strong>
            </div>
            <p className='text-muted mt-2'>Guarda esta información.</p>
            <button className='btn btn-outline-danger' onClick={handleFinish}>Terminar</button>
        </div>
    )
}
