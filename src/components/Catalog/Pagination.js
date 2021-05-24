import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Pagination({ pageSize }) {
    const { items } = useContext(AppContext)
    const pag = items.filter((el, indx) => indx % pageSize === 0)
    if (items !== undefined) {
        if (Array.isArray(items)) {
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