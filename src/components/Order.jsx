import React, { useContext, useEffect, useState } from 'react'
import { OrderDataContext } from '../context/OrderData'
import { CartContext } from '../context/CartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

export const Order = () => {
    const { userData } = useContext(OrderDataContext);
    const [orderId, setOrderId] = useState(null)
    const { cart, total } = useContext(CartContext);
    const createOrder = async () => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
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
            const {id} = await addDoc(orderCollection);
            setOrderId(id);
        }
    }
    useEffect( () => {
        createOrder()
    },[])
    if(orderId) return (
        <div className='d-flex justify-content-center align-items-center'>
            <h3 className='text-center'>El id de su compra es {orderId}</h3>
        </div>
    )
    return (
        <div>Order</div>
    )
}
