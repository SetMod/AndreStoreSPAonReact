import React, { useState, useEffect } from 'react'
import ApiService from '../../services/ApiService'
import './Cart.css'

export default function Cart() {
    const apiUrl = process.env.REACT_APP_CART_API_URI
    const [cart, setCart] = useState()
    const catalogService = new ApiService(apiUrl)
    const fetchCart = async () => {
        await fetch(apiUrl, { method: 'GET' })
            .then(res => res.json())
            .then(cart => setCart(cart))
    }

    useEffect(() => {
        fetchCart()
    }, [])
    return (
        <div>
            <h2>Cart</h2>
            {
                cart !== undefined ?
                    Array.isArray(cart) ? <ShowCart cart={cart} />
                        : <div>Cart not found</div>
                    : <div>Loading...</div>
            }
        </div>
    )
}

export function ShowCart({ cart }) {
    return (
        <>
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
            <button onClick={() => { console.log('Dlete all from cart') }} >Dlete cart</button>
            <button onClick={() => { console.log('Update cart') }} >Update cart</button>
        </>
    )
}
