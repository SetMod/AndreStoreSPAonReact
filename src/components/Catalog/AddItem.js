import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function AddItem() {
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI
    const { showAddItem, setShowAddItem } = useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            id: Number.parseInt(e.target.itemId.value),
            price: Number.parseInt(e.target.price.value),
            deliveryId: Number.parseInt(e.target.deliveryId.value),
            description: e.target.description.value,
            name: e.target.name.value,
            imagePath: e.target.imagePath.value,
            category: e.target.category.value,
            amount: Number.parseInt(e.target.amount.value)
        }
        console.log(obj);
        await fetch(apiUrl, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => res === true ? alert('Успішно додано!') : alert('Сталася помилка!'))
            .catch(er => alert(er));
    }

    return (
        <div>
            <form action="post" onSubmit={handleSubmit} className="form_container add_item_form">
                <label htmlFor="itemId">Id:</label>
                <input type="text" name="itemId" />
                <label htmlFor="deliveryId">Id доставки:</label>
                <input type="text" name="deliveryId" />
                <label htmlFor="name">Назва</label>
                <input type="text" name="name" />
                <label htmlFor="price">Ціна</label>
                <input type="number" name="price" />
                <label htmlFor="description">Опис</label>
                <textarea name="description" cols="30" rows="10"></textarea>
                <label htmlFor="category">Категорія</label>
                <select name="category">
                    <option value="motherboard">Материнські плати</option>
                    <option value="processor">Процессори</option>
                    <option value="videocard">Відеокарти</option>
                </select>
                <label htmlFor="amount">Кількість</label>
                <input type="number" name="amount" />
                <label htmlFor="imagePath">Зобрадення</label>
                <input type="text" name="imagePath" />
                <div className="form_buttons">
                    <button>Submit</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setShowAddItem(!showAddItem)
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
