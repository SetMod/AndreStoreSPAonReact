import React from 'react'

export default function ShowProfile({ profile }) {
    return (
        <div className='catalog_conatiner'>
            {profile.map(el => {
                return (
                    <div className='profile' key={el.id}>
                        <div>Id: {el.id}</div>
                        <div>CustomerId: {el.customerId}</div>
                        <div>Amount: {el.amount}</div>
                        <div>OrderDate: {el.profileDate}</div>
                    </div>
                )
            })}
        </div>
    )
}
