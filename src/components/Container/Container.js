import React from 'react'
// import Catalog from '../../Catalog/Catalog'
// import Home from '../../Home/Home'
import './Container.css'

export default function Container(props) {
    return (
        <div id="container">
            {props.children}
        </div>
    )
}
