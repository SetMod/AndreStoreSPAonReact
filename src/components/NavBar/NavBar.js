import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    const [curent, setCurent] = useState()

    useEffect(() => {
        setCurent(document.getElementById('home_nav'))
    }, [])

    useEffect(() => {
        if (curent) {
            curent.classList.add('active_nav')
        }

        return () => {
            if (curent) {
                curent.classList.remove('active_nav')
            }
        }
    }, [curent])

    return (
        <>
            <nav id='nav'>
                <ul id='navdar' onClick={(e) => e.target.nodeName !== 'UL' ? setCurent(e.target) : ''}>
                    <li><Link id='home_nav' to='/' >Головна</Link></li>
                    <li><Link to='/Catalog'>Каталог</Link></li>
                    <li><Link to='/Cart'>Кошик</Link></li>
                    <li><Link to='/Orders'>Замовлення</Link></li>
                    <li><Link to='/Profile'>Профіль</Link></li>
                    <li><Link to='/Customers'>Користувачі</Link></li>
                    <li><Link id='login_nav' to='/Login'>Авторизуватися</Link></li>
                    <li><Link id='signup_nav' to='/SignUp'>Зареєструватися</Link></li>
                    <li id='user_logedin'></li>
                </ul>
            </nav>
        </>
    )
}