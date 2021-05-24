import React from 'react'
import CatalogOptions from './CatalogOptions'
import ShowCatalog from './ShowCatalog'
import Pagination from './Pagination'
import './Catalog.css'

export default function Catalog() {

    return (
        <div>
            <CatalogOptions />
            <ShowCatalog />
            <Pagination pageSize={6} />
        </div>
    )
}