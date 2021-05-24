import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import EditCustomer from './EditCustomer'
import AddCustomer from './AddCustomer'

export default function CustomersOptions() {
    const { showAddCustomer, setShowAddCustomer } = useContext(AppContext)
    const { showEditForm } = useContext(AppContext)
    const { customers } = useContext(AppContext)
    const { itemId } = useContext(AppContext)
    const item = customers.find(item => item.id === itemId)
    return (
        <div>
            <select name="sort" id="sort">
                <option value="moneyUp">По зростанню</option>
                <option value="moneyDown">По спаданню</option>
            </select>
            <select name="category">
                <option value="motherboard">Материнські плати</option>
                <option value="processor">Процессори</option>
                <option value="videocard">Відеокарти</option>
            </select>
            <button onClick={() => setShowAddCustomer(!showAddCustomer)}>Додати</button>
            {showAddCustomer === true ? <AddCustomer /> : <></>}
            {showEditForm === true ? <EditCustomer item={item} /> : <></>}
        </div>
    )
}
