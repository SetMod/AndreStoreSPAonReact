import React, { useState, useEffect } from 'react'
import ApiService from '../../services/ApiService'

import './Profile.css'
export default function Profile() {
    const apiUrl = process.env.REACT_APP_CUSTOMER_API_URI
    const [profile, setProfile] = useState()
    const profileService = new ApiService(apiUrl)

    const fetchOrder = () => {
        profileService.getAllItems()
            .then(profile => setProfile(profile))
        console.log(profile);
    }
    useEffect(() => {
        fetchOrder()
    }, [])
    return (
        <div>
            <h2>Profile</h2>
            <button onClick={() => { console.log('Update profiles') }} >Update my profile</button>
            {
                profile !== undefined ?
                    Array.isArray(profile) ? <ShowProfile profile={profile} />
                        : <div>Profile not found</div>
                    : <div>Loading...</div>
            }
        </div>
    )
}


export function ShowProfile({ profile }) {
    return (
        <div className='catalog_conatiner'>
            {profile.map(el => {
                return (
                    <div className='profile' key={el.id}>
                        <div>Id: {el.id}</div>
                        <div>Ім'я: {el.name}</div>
                        <div>Адреса: {el.address}</div>
                        <div>Телефон: {el.phone}</div>
                        <div>Електрона пошта: {el.email}</div>
                        <div>Роль: {el.roleType}</div>
                        <div>Пароль: {el.password}</div>
                    </div>
                )
            })}
        </div>
    )
}