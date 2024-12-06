import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import ErrorPage from './pages/ErrorsPage'
import MainLayouts from './Layouts/MainLayouts'
import Cards from './pages/Cards'
import Login from './Login'
import CreateAccount from './CreateAccount'
import ProductsDetails from './pages/ProductsDetails'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/createAccount' element = {<CreateAccount></CreateAccount>}></Route>
        <Route path='/' element = {<MainLayouts><HomePage></HomePage></MainLayouts>}></Route>
        <Route path='/about' element = {<MainLayouts><About></About></MainLayouts>}></Route>
        <Route path='/products' element = {<MainLayouts><Products></Products></MainLayouts>}></Route>
        <Route path='/products/:id' element = {<MainLayouts><ProductsDetails></ProductsDetails></MainLayouts>}></Route>
        <Route path='/cards' element = {<MainLayouts><Cards></Cards></MainLayouts>}></Route>
        <Route path='*' element = {<MainLayouts><ErrorPage></ErrorPage></MainLayouts>}></Route>
      </Routes>
    </div>
  )
}

export default App
