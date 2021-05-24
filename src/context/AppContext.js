import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export function AppProvider(props) {
    const [items, setItems] = useState([])
    const [customers, setCustomers] = useState([])

    const [showEditForm, setShowEditForm] = useState(false)
    const [showAddItem, setShowAddItem] = useState(false)
    const [showAddCustomer, setShowAddCustomer] = useState(false)

    const [itemId, setItemId] = useState(0)
    const value = {
        items,
        setItems,
        showEditForm,
        setShowEditForm,
        showAddItem,
        setShowAddItem,
        itemId,
        setItemId,
        customers,
        setCustomers,
        showAddCustomer,
        setShowAddCustomer
    }

    return (
        <AppContext.Provider value={value}>
            { props.children}
        </AppContext.Provider >
    )
}