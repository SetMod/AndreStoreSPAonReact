import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function EditCustomer({ item }) {
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI
    const { showEditForm, setShowEditForm } = useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {
            id: Number.parseInt(e.target.itemId.value),
            price: Number.parseInt(e.target.price.value),
            deliveryId: Number.parseInt(e.target.deliveryId.value),
            description: e.target.description.value,
            name: e.target.name.value,
            imagePath: e.target.imagePath.value,
            category: e.target.category.value,
            amount: Number.parseInt(e.target.amount.value)
        }
        await fetch(apiUrl, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(res => res === true ? alert('Успішно додано!') : alert('Сталася помилка!'))
            .catch(er => alert(er));
    }
    return (
        <div>
            <form action="post" onSubmit={handleSubmit} className="form_container add_item_form">
                <label htmlFor="itemId">Id:</label>
                <input type="text" name="itemId" defaultValue={item.id} />
                <label htmlFor="deliveryId">Id доставки:</label>
                <input type="text" name="deliveryId" defaultValue={item.deliveryId} />
                <label htmlFor="name">Назва</label>
                <input type="text" name="name" defaultValue={item.name} />
                <label htmlFor="price">Ціна</label>
                <input type="number" name="price" defaultValue={item.price} />
                <label htmlFor="description">Опис</label>
                <textarea name="description" cols="30" rows="10" defaultValue={item.description} />
                <label htmlFor="category">Категорія</label>
                <select name="category" defaultValue={item.category}>
                    <option value="motherboard" >Материнські плати</option>
                    <option value="processor" > Процессори</option>
                    <option value="videocard" >Відеокарти</option>
                </select>
                <label htmlFor="amount">Кількість</label>
                <input type="number" name="amount" defaultValue={item.amount} />
                <label htmlFor="imagePath">Зобрадення</label>
                <input type="text" name="imagePath" />
                <img src={item.imagePath} alt={item.name} />
                <div className="form_buttons">
                    <button>Підтвердити</button>
                    <button onClick={(e) => {
                        setShowEditForm(!showEditForm)
                        e.preventDefault()
                    }}>Назад</button>
                </div>
            </form>
        </div>
    )
}
