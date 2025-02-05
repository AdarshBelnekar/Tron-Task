import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider.jsx'
import SalesDashboard from './components/Dashboard/SalesDashboard.jsx'
import Sign from './components/Dashboard/Sign.jsx'
import Categories from './components/Dashboard/Categories.jsx'

import { Route, Router, Routes } from 'react-router-dom'
import CategoryList from './components/Dashboard/CategoryList.jsx'


const App = () => {

    const [user,setUser]=useState(null);
    
    
    
    
    
   
     const data= useContext(AuthContext)
     console.log(data)
  

  return (
   <>
   {/* {!user ? <Login handleLogin={handleLogin}/> : " "} */}
   {user =='admin' ? <Categories/>: alert("Invalid ")}

   {/* <EmployeeDashboard/> */}
      
     {/* <AdminDashboard/> */}
     <Routes>
     <Route path="/" element={<Sign />} />
              <Route path="/categories" element={<Categories />} />
              <Route path='/dashboard' element={<SalesDashboard/>} />
              <Route path='/categoryList' element={<CategoryList/>} />
        


      </Routes>
     
     
  
   </>
  )
}

export default App
