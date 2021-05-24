import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import EditItem from '../Card/EditItem'
import AddItem from './AddItem'

export default function CatalogOptions() {
    const { showAddItem, setShowAddItem } = useContext(AppContext)
    const { showEditForm } = useContext(AppContext)
    const { items } = useContext(AppContext)
    const { itemId } = useContext(AppContext)
    const item = items.find(item => item.id === itemId)
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
            <button onClick={() => setShowAddItem(!showAddItem)}>Додати</button>
            {showAddItem === true ? <AddItem /> : <></>}
            {showEditForm === true ? <EditItem item={item} /> : <></>}
        </div>
    )
}
