import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import Admin from './components/Admin';
import ProtectedRoutes from './components/ProtectedRoutes';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';
import Page404 from './components/404';
import Home from './components/Home';

const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/products' element={<ProtectedRoutes requiredRole={"user" || "admin"}>
       <Products/></ProtectedRoutes>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/user' element={
        <ProtectedRoutes requiredRole="user"><User/>
          
        </ProtectedRoutes>
      }/>
      <Route path='/prod/:id' element={<ProtectedRoutes requiredRole={"user" || "admin"} ><SingleProduct/></ProtectedRoutes> }/>
      <Route path='/admin' element={<ProtectedRoutes requiredRole="admin"><Admin/></ProtectedRoutes>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
      
    </div>
  )
}

export default App
