import React from 'react'

export default function ShowCart({ cart }) {
    return (
        <div className='catalog_conatiner'>
            {cart.map(el => {
                return (
                    <div className='cart' key={el.id}>
                        <div>Id: {el.id}</div>
                        <div>CustomerId: {el.customerId}</div>
                        <div>TotalPrice: {el.totalPrice}</div>
                    </div>
                )
            })}
        </div>
    )
}
