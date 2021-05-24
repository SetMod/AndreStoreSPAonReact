import React from 'react'
// import { AppContext } from '../../context/AppContext'
import './SignUp.css'

export default function SignUp() {
    const apiUrl = process.env.REACT_APP_CUSTOMER_IDENTITY_API_URI
    // const { showEditForm, setShowEditForm } = useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.confPassword.value) {
            alert('Підтвердіть пароль!')
            return
        }
        const customer = {
            // id: Number.parseInt(e.target.customerId.value),
            name: e.target.name.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            roleType: e.target.roleType.value,
            password: e.target.password.value
        }
        await fetch(apiUrl, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => res !== undefined ? alert('Успішно створено!') : alert('Сталася помилка!'))
            .catch(er => alert(er));
    }
    return (
        <div className="form_container">
            <h3 className="form_title">Реєстрація</h3>
            <form action="POST" onSubmit={handleSubmit} >
                <label htmlFor="customerId">Id:</label>
                <input type="number" name="customerId" disabled={true} />
                <label htmlFor="email" >Електронна пошта:</label>
                <input type="email" name="email" maxlength="100" />
                <label htmlFor="name">Ім'я:</label>
                <input type="text" name="name" maxlength="100" />
                <label htmlFor="address">Адреса:</label>
                <input type="text" name="address" maxlength="255" />
                <label htmlFor="phone">Телефон:</label>
                <input type="text" name="phone" maxlength="15" />
                <label htmlFor="password">Пароль:</label>
                <input type="password" name="password" maxlength="50" />
                <label htmlFor="confPassword">Підтвердіть пароль:</label>
                <input type="password" name="confPassword" maxlength="50" />

                <label htmlFor="roleType" >Роль:</label>
                <input type="text" name="roleType" defaultValue='Customer' maxlength="50" disabled={true} />
                <div className="form_buttons">
                    <button>Підтвердити</button>
                    <button>Відмінити</button>
                </div>
            </form>
        </div>
    )
}
