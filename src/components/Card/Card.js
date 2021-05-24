import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import EditItem from './EditItem'
import './Card.css'

export default function Card({ item }) {
    const apiUrl = process.env.REACT_APP_CATALOG_API_URI

    const { showEditForm, setShowEditForm } = useContext(AppContext)
    const { setItemId } = useContext(AppContext)

    const deleteHandler = async (id) => {
        if (window.confirm('Ви впевнені?')) {
            await fetch(apiUrl + '/' + id, { method: 'DELETE' })
                .then(res => res.json())
                .then(res => res === true ? alert('Успішно видалено!') : alert('Сталася помилка!'))
                .catch(err => alert(err))
        }
    }
    return (
        <>
            {/* {showEditForm === true ? <EditItem item={item} /> : <></>} */}
            <div className='card_container' key={item.id}>
                <div className='card_text card_image'><img src={item.imagePath} alt={item.name} /></div>
                <div className='card_text'>
                    <span className="card_title">Id:</span>
                    <span className="card_sub_text">{item.id}</span>
                </div>
                <div className='card_text'>
                    <span className=" card_title">Id замовлення:</span>
                    <span className=" card_sub_text">{item.deliveryId}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Назва:</span>
                    <span className="card_sub_text">{item.name}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Категорія:</span>
                    <span className="card_sub_text">{item.category}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Ціна:</span>
                    <span className="card_sub_text">{item.price}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Опис:</span>
                    <span className="card_sub_text">{item.description}</span>
                </div>
                <div className='card_text'>
                    <span className="card_title">Кількість:</span>
                    <span className="card_sub_text">{item.amount}</span>
                </div>
                <div className="buttons-area">
                    <button className='add-to-cart-btn' onClick={() => { console.log(item.id) }}>Додати до кошика</button>
                </div>

                <div className="buttons-area">
                    <button className='edt-btn' onClick={() => {
                        setShowEditForm(!showEditForm)
                        setItemId(item.id)
                    }}>Редагувати</button>
                    <button className='dlt-btn' onClick={() => { deleteHandler(item.id) }}>Видалити</button>
                </div>
            </div>
        </>
    )
}
