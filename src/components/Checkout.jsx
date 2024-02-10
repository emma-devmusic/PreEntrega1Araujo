import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { checkingFormValues } from "../helpers/helpers";
import { OrderDataContext } from "../context/OrderData";

export const Checkout = () => {
    const navigate = useNavigate()
    const {total} = useContext(CartContext);
    const {setOrderData} = useContext(OrderDataContext);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        check: false
    })

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    const handlerCheckbox = ({target}) => {
        setFormValues({
            ...formValues,
            check: target.checked
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkingFormValues(formValues).length === 0) {
            setOrderData(formValues)
            navigate('/order')
        }
    }


    return (
        <div className="container mt-4">
            <h2 className="">Checkout</h2>
            <hr />
            {
                (total() == 0) 
                ? <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-center mt-3 mb-3">No tienes nada para confirmar el pago</h5>
                    <Link to={'/'} className="btn btn-danger">Regresar a la tienda</Link>
                </div>
                : <form className="d-flex checkout">
                    <div className="card p-4 w-50">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input name="name" type="text" className="form-control" id="name" value={formValues.name} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo electrónico</label>
                            <input name="email" type="email" className="form-control" id="correo"  value={formValues.email} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input name="phone" type="phone" className="form-control" id="telefono" value={formValues.phone} onChange={handleInputChange}/>
                        </div>
                        <div id="emailHelp" className="form-text mb-4">Nunca compartiremos tu información con nadie.</div>
                    </div>
                    <div className="card p-4 w-50 h-50">
                        <h6>Selecciona tu método de pago preferido</h6>
                        <select className="form-select mt-3 mb-3" aria-label="Mercado Pago">
                            <option defaultValue={'Mercado Pago'}>Mercado Pago</option>
                            <option value="1">Transferencia Bancaria</option>
                            <option value="2">Tarjeta de Crédito</option>
                            <option value="3">Pago en Local</option>
                        </select>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="terminos" name="check" value={formValues.check}  onChange={handlerCheckbox}/>
                            <label className="form-check-label" htmlFor="terminos">Acepto los términos y condiciones de servicio</label>
                        </div>
                        <button 
                            className="btn btn-danger mb-2"
                            onClick={handleSubmit}  
                        >Generar Orden</button>
                        {
                            checkingFormValues(formValues).map( e => <div className="form-text text-danger m-0" key={e}>*{e}</div>)
                        }
                    </div>
                </form>
                
            }
        </div>
    )
}
