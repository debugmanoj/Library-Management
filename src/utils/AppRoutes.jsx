import React from 'react'
import Home from '../Components/Home'
import AddBook from '../Components/AddBook'
import Dashboard from '../Components/Dashboard'
import { Navigate } from 'react-router-dom'
const AppRoutes=[
    {
        path:"/",
        exact:true,
        element:<Home/>
    },
    {
        path:"/add",
        exact:true,
        element:<AddBook/>
    },
    {
        path:"/dashboard",
        exact:true,
        element:<Dashboard/>
    },
    {
        path:"*",
        exact:true,
        element:<Navigate to="/"/>
    }

]
export default AppRoutes