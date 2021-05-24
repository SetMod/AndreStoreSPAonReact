import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ApiService from '../../services/ApiService'
import Card from '../Card/Card'

export default function ShowCatalog() {
    const { items, setItems } = useContext(AppContext)
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI
    const catalogService = new ApiService(apiUrl)
    const fetchCatalog = async () => {
        await catalogService.getAllItems()
            .then(items => setItems(items))
    }

    useEffect(() => {
        fetchCatalog()
    }, [])

    if (items !== undefined) {
        if (Array.isArray(items)) {
            return (
                <div className='catalog_conatiner'>
                    {items.map(el => {
                        return <div key={el.id}><Card item={el} /></div>
                    })}
                </div>
            )
        }
        return <div className='catalog_conatiner'>Продуктів не знайдено</div>
    }
    return <div className='catalog_conatiner'>Завантаження...</div>

}