import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import { CartResume } from './CartResume'

export const CartView = () => {

    const { cart, total, removeItem } = useContext(CartContext)

    return (
        <div className='container cart-view'>
            <h2 className=' mt-4'>Carrito</h2>
            <hr />
            <div className='d-flex mt-3 box-container-resume'>
                <div className="card p-2 w-75">
                    {
                        cart.length === 0
                        ? <h5 className='text-center mt-5 mb-5'>El carrito está vacío</h5>
                        :<table className="table">
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
                                    cart.map( (e, i) => <CartItem key={i} data={e} removeItem={removeItem} /> )
                                }
                            </tbody>
                        </table>
                    }
                </div>
                <CartResume total={total()} />
            </div>
            

        </div>
    )
}
