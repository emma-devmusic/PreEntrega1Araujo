import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const Checkout = () => {

    const {total} = useContext(CartContext)

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
                : <div className="d-flex checkout">
                    <div className="card p-4 w-50">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="correo" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input type="phone" className="form-control" id="telefono"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Dirección</label>
                                <input type="text" className="form-control" id="direccion"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="ciudad"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pais" className="form-label">País</label>
                                <input type="text" className="form-control" id="pais"/>
                            </div>
                            <div id="emailHelp" className="form-text mb-4">Nunca compartiremos tu información con nadie.</div>
                        </form>
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
                            <input type="checkbox" className="form-check-input" id="terminos"/>
                            <label className="form-check-label" htmlFor="terminos">Acepto los términos y condiciones de servicio</label>
                        </div>
                        <button type="submit" className="btn btn-danger">Pagar</button>
                    </div>
                </div>
            }
        </div>
    )
}
