import { useLocation } from "react-router-dom"
import { productsMock } from "../mock/asyncMock"
import { CardItem } from "./CardItem"
import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getters"

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then( resp => setProducts(resp) )
        .catch(error => console.error(error))
        .finally( () => setLoading(false) )
    },[])


    if(loading) return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    
    return (
        <div className="container">
            {
                (useLocation().pathname === '/') &&
                <>
                <h3 className="text-center mt-5">{greeting}</h3>
                <hr />
                <h5 className="text-center mb-5">Explora todos nuestros productos.</h5>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        products.map( (prod,i) => <CardItem  prod={prod} key={i} />)
                    }
                </div>
                </>
            }
        </div>
    )
}
