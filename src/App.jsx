import React from 'react'
import Header from './Layout/Header/Header'
import "./App.css"
import { Route,Routes,Router } from 'react-router-dom'
import Home from './Component/Home/Home'
import Footer from './Layout/Footer/Footer'
import Login from './Component/Login/Login'
import ListProduct from './Component/ListProduct/Listproduct'
import Order from './Component/Orders/Order'
import Profile from "./Component/Profile/Profile"
import Cart from './Component/Cart/Cart'
const App = () => {
  return (
    <>
   
      <Routes>
        <Route path= "/" element={[<Header/> ,<Home /> ,<Footer/>]}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path= "/listProduct" element={[<Header/> ,<ListProduct/> ,<Footer/>]}></Route>
        <Route path= "/Order" element={[<Header/> ,<Order/> ,<Footer/>]}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path= "/Cart" element={[<Header/> ,<Cart/> ,<Footer/>]}></Route>


      </Routes>
    
    
    </>
  )
}

export default App
