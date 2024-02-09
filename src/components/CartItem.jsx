import React from 'react'

export const CartItem = ({ data }) => {
    console.log(data)
    return (
        <tr className=''>
            <td className=''>{data.name}</td>
            <td className=''>{data.quantity}</td>
            <td className=''>{data.price}</td>
            <td> borrar </td>
        </tr>
    )
}
