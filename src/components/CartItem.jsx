import React, { useState } from 'react'

export const CartItem = ({ data, removeItem }) => {
    const [quant, setQuant] = useState(data.quantity)
    const handleInputChange = (e) => {
        setQuant(e.target.value)
    }
    return (
        <tr className='cart-table-row'>
            <td className='pt-3'>{data.name}</td>
            <td className=''>
                <input 
                    type="number"
                    className="form-control" 
                    placeholder="0" 
                    min={1}
                    value={quant}
                    onChange={handleInputChange}
                />
            </td>
            <td className='pt-3'>{data.price}</td>
            <td> <div onClick={() => removeItem(data.id)} className='text-center btn btn-outline-danger'>Borrar</div> </td>
        </tr>
    )
}
