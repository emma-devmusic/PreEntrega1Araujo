import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../helpers/getters"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";

export const Product = () => {

    const { addItem } = useContext(CartContext)
    const [prod, setProd] = useState({});
    const [quantity, setQuantity] = useState('1');
    const params = useParams();
    const [isAdded, setIsAdded] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        getProductById(params.itemId)
        .then( resp => setProd(resp) )
        .catch(error => console.error(error))
        .finally( () => setLoading(false) )
    }, [params]);

    const handleInputChange = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    }

    const handleAdd = () => {
        if(isAdded) {
            navigate('/cart')
            return
        }
        if(quantity == '0') {
            return
        }
        const item = {id: prod.id, name: prod.name, price: prod.price}
        addItem(item, quantity);
        setIsAdded(true)
    }
    
    if(loading) return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    return (
        <div className="container" id="product">
            <h3 className="text-center mt-4">Individuales</h3>
            <hr />
            <div className="d-flex box justify-content-center">
                <div className="card img">
                    <img src={prod.img} className="" alt="..."/>
                </div>
                <div className="card desc">
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.description}</p>
                        <h5 className="text-success font-weight-bold">${prod.price}</h5>
                        <hr />
                        <h6>Talles disponibles:</h6>
                        <span className="">{prod.size}</span>
                        <h6 className="mt-3">Colores disponibles:</h6>
                        <span>{prod.color}</span>
                        <br />
                        <div className="counter input-group-sm  mt-3 d-flex align-items-center">
                            <h6 className="m-0">Cantidad:</h6>
                            <input 
                                type="number"
                                className="form-control w-25" 
                                placeholder="0" 
                                min={0}
                                value={quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button 
                            onClick={ handleAdd }
                            className="btn btn-outline-danger mt-3 w-100"
                        >
                            { isAdded ? 'Terminar Compra' : 'Agregar al carrito' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
