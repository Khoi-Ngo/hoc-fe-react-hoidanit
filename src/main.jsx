import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error-components/errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <div> login page</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <div> register page</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/users",
    element: <div> users page</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: <div> products page</div>,
    errorElement: <ErrorPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
