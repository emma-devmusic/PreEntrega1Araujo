import { useLocation } from "react-router-dom"
import { productsMock } from "../mock/asyncMock"
import { CardItem } from "./CardItem"
import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getters"

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(
            (resp) => {
                setProducts(resp)
            }
        )
        setProducts(productsMock)
    },[])

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
