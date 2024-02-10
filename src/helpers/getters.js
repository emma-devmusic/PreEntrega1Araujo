import { db } from "../services/firebase/firebaseConfig";
import { getDocs, collection, doc, getDoc, query, where } from "firebase/firestore";

export const getProducts = () => new Promise((resolve, reject) => {
    const productsCollection = collection(db, 'products')
    getDocs(productsCollection)
    .then( resp => {
            const productsAdapted = resp.docs.map( doc => {
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
            resolve(productsAdapted)
        }
    ).catch(error => {reject(error)})
})

export const getProductById = (id) => new Promise( (res, rej) => {
    const product = doc(db, 'products', id)
    getDoc(product)
    .then( resp => {
        const prod = resp.data()
        res({id: resp.id, ...prod})
    } )
    .catch( error => rej(error))
})

export const getProductsByCategory = (category) => new Promise( (res, rej) => {
    const productsCollection = query( 
        collection(db, 'products'), where('category', '==', category)
    )
    getDocs(productsCollection)
    .then( resp => {
            const productsAdapted = resp.docs.map( doc => {
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
            res(productsAdapted)
        }
    ).catch(error => {rej(error)})
})