import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ApiService from '../../services/ApiService'
import CustomerCard from './CustomerCard'

export default function ShowCustomers() {
    const { customers, setCustomers } = useContext(AppContext)
    const apiUrl = process.env.REACT_APP_CUSTOMER_API_URI
    const catalogService = new ApiService(apiUrl)
    const fetchCustomers = async () => {
        await catalogService.getAllItems()
            .then(customers => setCustomers(customers))
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    if (customers !== undefined) {
        if (Array.isArray(customers)) {
            return (
                <div className='catalog_conatiner'>
                    {customers.map(el => {
                        return <div key={el.id}><CustomerCard customer={el} /></div>
                    })}
                </div>
            )
        }
        return <div className='catalog_conatiner'>Продуктів не знайдено</div>
    }
    return <div className='catalog_conatiner'>Завантаження...</div>

}