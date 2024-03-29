import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart( state => [...state, {...item, quantity}] );
        } else {
            console.error('El producto ya fue agregado');
        }
    }

    const total = () => {
        let total = 0
        cart.forEach( e => {
            total += e.price * e.quantity
        })
        return total
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => cart.some(prod => prod.id === itemId)

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    )
}