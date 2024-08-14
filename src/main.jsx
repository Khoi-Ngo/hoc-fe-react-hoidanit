import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorpage.jsx';
import UsersPage from './pages/User.jsx';
import RegisterPage from './pages/Register.jsx';
import ProductsPage from './pages/Product.jsx';
import LoginPage from './pages/Login.jsx';
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/users",
    element: <UsersPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: <ProductsPage/>,
    errorElement: <ErrorPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
