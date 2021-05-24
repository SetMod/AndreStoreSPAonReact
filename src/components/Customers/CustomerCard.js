import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function CustomerCard({ customer }) {
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI

    const { showEditForm, setShowEditForm } = useContext(AppContext)
    const { setItemId } = useContext(AppContext)

    const deleteHandler = async (id) => {
        if (window.confirm('Ви впевнені?')) {
            await fetch(apiUrl + '/' + id, { method: 'DELETE' })
                .then(res => res.json())
                .then(res => res !== undefined ? alert('Успішно видалено!') : alert('Сталася помилка!'))
                .catch(err => alert(err))
        }
    }
    return (
        <>
            {/* {showEditForm === true ? <EditItem customer={customer} /> : <></>} */}
            <div className='card_container' key={customer.id}>
                <div className='card_text card_image'><img src={customer.imagePath} alt={customer.name} /></div>
                <div className='card_text'>
                    <span className="card_title">Id:</span>
                    <span className="card_sub_text">{customer.id}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Назва:</span>
                    <span className="card_sub_text">{customer.name}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Адреса:</span>
                    <span className="card_sub_text">{customer.address}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Телефон:</span>
                    <span className="card_sub_text">{customer.phone}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Електронна пошта:</span>
                    <span className="card_sub_text">{customer.email}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Роль:</span>
                    <span className="card_sub_text">{customer.roleType}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Пароль:</span>
                    <span className="card_sub_text">{customer.password}</span>
                </div>
                <div className="buttons-area">
                    <button className='add-to-cart-btn' onClick={() => { console.log(customer.id) }}>Додати до кошика</button>
                </div>

                <div className="buttons-area">
                    <button className='edt-btn' onClick={() => {
                        setShowEditForm(!showEditForm)
                        setItemId(customer.id)
                    }}>Редагувати</button>
                    <button className='dlt-btn' onClick={() => { deleteHandler(customer.id) }}>Видалити</button>
                </div>
            </div>
        </>
    )
}
