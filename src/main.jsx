import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import ErrorPage from './components/ErrorPage/ErrorPage'
import CheckOutPage from './components/CheckOutPage/CheckOutPage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:() => fetch("products.json"),
    children:[
      {
        // children
        path:"/",
        element:<Home></Home>
      },
      {
        path:"shop",
        element:<Shop></Shop>,
        loader:() => fetch("products.json")
      },
      {
        path:"cart",
        element:<Cart></Cart>,
        loader:() => fetch("products.json")
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"checkout",
        element:<CheckOutPage></CheckOutPage>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>,
)
