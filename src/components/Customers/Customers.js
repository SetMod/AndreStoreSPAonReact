import React from 'react'
import CustomersOptions from './CustomersOptions'
import ShowCustomers from './ShowCustomers'
import Pagination from './Pagination'

export default function Customers() {
    return (
        <div>
            <CustomersOptions />
            <ShowCustomers />
            <Pagination pageSize={6} />
        </div>
    )
}
