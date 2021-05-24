import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Pagination({ pageSize }) {
    const { customers } = useContext(AppContext)
    const pag = customers.filter((el, indx) => indx % pageSize === 0)
    if (customers !== undefined) {
        if (Array.isArray(customers)) {
            return (
                <div className="pagination">
                    {pag.map((el, indx) => {
                        return <a href="#w" key={indx}>{indx + 1}</a>
                    })}
                </div>
            )
        }
        return <a href="#w" >0</a>
    }
}