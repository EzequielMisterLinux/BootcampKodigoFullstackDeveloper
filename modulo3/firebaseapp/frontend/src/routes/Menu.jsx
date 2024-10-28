import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ListProducts from '../components/ListProducts'
import RegisterProduct from '../components/RegisterProduct'
import EditProduct from '../components/EditProduct'

export default function Menu() {
  return (
    <BrowserRouter>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/list-products"}>Lista de productos</Link>
                    </li>
                    <li>
                        <Link to={"/register-product"}>Agregar Productos</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list-products' element={<ListProducts/>}/>
            <Route path='/register-product' element={<RegisterProduct/>}/>
            
            <Route path='/edit-product/:id' element={<EditProduct/>}/>
        </Routes>
    </BrowserRouter>
  )
}
