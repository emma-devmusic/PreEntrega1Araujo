import React, { useContext, useEffect, useState } from 'react'
import { OrderDataContext } from '../context/OrderData'
import { CartContext } from '../context/CartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { Ticket } from './Ticket';

export const Order = () => {
    const { userData } = useContext(OrderDataContext);
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext);
    
    const createOrder = async () => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total: total()
        }
        const batch = writeBatch(db)
        const ids = cart.map( prod => prod.id)
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
        const outOfStock = []
        const querySnapshot = await getDocs(productsCollection);
        const {docs} = querySnapshot
        docs.forEach(doc => {
            const fields = doc.data();
            const stockDb = fields.stock
            const productsAddedToCart = cart.find(prod=> prod.id === doc.id);
            const prodQuantity = productsAddedToCart.quantity
            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...fields})
            }
        })
        if(outOfStock.length === 0) {
            batch.commit()
            const orderCollection = collection(db, 'orders')
            const {id} = await addDoc(orderCollection, objOrder);
            setOrderId(id);
        }
    }
    useEffect( () => {
        createOrder()
    },[])
    if(orderId) return (
        <Ticket id={orderId} buyer={userData} items={cart} total={total()} />
    )
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
