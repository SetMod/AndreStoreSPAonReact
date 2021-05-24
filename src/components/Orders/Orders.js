import React, { useState, useEffect } from 'react'
import ApiService from '../../services/ApiService'
import ShowOrders from './ShowOrders'
import './Orders.css'

export default function Orders() {
    const apiUrl = process.env.REACT_APP_ORDERING_API_URI
    const [orders, setOrder] = useState()
    const ordersService = new ApiService(apiUrl)

    const fetchOrder = () => {
        ordersService.getAllItems()
            .then(orders => setOrder(orders))

    }
    useEffect(() => {
        fetchOrder()
    }, [])


    return (
        <div>
            <h2>Orders</h2>
            <button onClick={() => { console.log('Update orders') }} >Update my orders</button>
            {
                orders !== undefined ?
                    Array.isArray(orders) ? <ShowOrders orders={orders} />
                        : <div>Order not found</div>
                    : <div>Loading...</div>
            }
        </div>
    )
}
