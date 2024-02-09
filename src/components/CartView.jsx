import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="container card mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map( (e, i) => <CartItem key={i} data={e} /> )
                    }
                        
                </tbody>
            </table>
        </div>
    )
}
