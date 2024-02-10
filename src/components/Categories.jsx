import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../helpers/getters"
import { CardItem } from "./CardItem"
import { useEffect, useState } from "react"


export const Categories = () => {

    const params = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProductsByCategory(params.categoryId)
        .then( resp => setProducts(resp) )
        .catch(error => console.error(error))
        .finally( () => setLoading(false) )
    }, [params])

    if(loading) return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    return (

        <div className="container">
            <h3 className="text-center mt-5">{params.categoryId.toUpperCase()}</h3>
            <hr />
            <div className="d-flex flex-wrap justify-content-center">
                {
                    products.map( (prod,i) => <CardItem prod={prod} key={i} />)
                }
            </div>
        </div>
    )
}
