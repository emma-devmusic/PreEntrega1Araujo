import { Link, useLocation } from "react-router-dom"


export const CardItem = ({prod}) => {

    const path = useLocation().pathname.includes('category') 
    ? '../item/' 
    : 'item/'

    return (
        <div className="card" style={{width: '18rem', margin: '.5rem'}}>
            <img src={prod.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <Link to={path + prod.id} className="btn btn-outline-danger w-100">Ver Producto</Link>
            </div>
        </div>
    )
}
