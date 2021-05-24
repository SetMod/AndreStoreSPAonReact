import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function EditCustomer({ item }) {
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI
    const { showEditForm, setShowEditForm } = useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const customer = {
            id: Number.parseInt(e.target.customerId.value),
            name: e.target.name.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            roleType: e.target.roleType.value,
            password: e.target.password.value
        }
        await fetch(apiUrl, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(res => res === true ? alert('Успішно додано!') : alert('Сталася помилка!'))
            .catch(er => alert(er));
    }
    return (
        <div>
            <form action="post" onSubmit={handleSubmit} className="form_container add_item_form">
                <label htmlFor="itemId">Id:</label>
                <input type="text" name="itemId" defaultValue={item.id} disabled={true} />
                <label htmlFor="name">Назва</label>
                <input type="text" name="name" defaultValue={item.name} />
                <label htmlFor="address">Адреса:</label>
                <input type="text" name="address" defaultValue={item.address} />
                <label htmlFor="phone">Телефон</label>
                <input type="number" name="phone" defaultValue={item.phone} />
                <label htmlFor="email">Електронна пошта</label>
                <input type="email" name="email" defaultValue={item.email} />
                <label htmlFor="roleType">Роль</label>
                <input type="text" name="roleType" defaultValue={item.roleType} />
                <label htmlFor="password">Пароль</label>
                <input type="text" name="password" defaultValue={item.password} />
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
