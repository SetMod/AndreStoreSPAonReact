import React from 'react'

export default function ShowOrders({ orders }) {
    return (
        <div className='catalog_conatiner'>
            {orders.map(el => {
                return (
                    <div className='order' key={el.id}>
                        <div>Id: {el.id}</div>
                        <div>CustomerId: {el.customerId}</div>
                        <div>Amount: {el.amount}</div>
                        <div>OrderDate: {el.orderDate}</div>
                    </div>
                )
            })}
        </div>
    )
}
