import { Link } from 'react-router-dom';

export const CartResume = ({total}) => {

    const calPercnt = (num, percentage) => {
        const result = num * (percentage / 100);
        return parseFloat(result.toFixed(2));
    }
    const iva = calPercnt( total, 21 );

    return (
        <div className='card p-3 w-25 h-25'>
            <div className='d-flex flex-column justify-content-between '>
                <h5 className='card-title'>Resumen de compra</h5>
                <div className='boxResumen'>
                    <p><i>Total de productos</i> <span>{total}</span></p>
                    <p><i>+IVA</i> <span>{ iva }</span></p>
                    <p><i>Total</i> <span>{ total + iva } </span></p>
                </div>
            </div>
            {
                (total > 0) &&
                <div className="mt-3">
                    <Link to={'/checkout'} className='btn btn-outline-danger btn-sm w-100'>Continuar</Link>
                </div>
            }
        </div>
    )
}
