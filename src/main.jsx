import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorpage.jsx';
import UsersPage from './pages/User.jsx';
import RegisterPage from './pages/Register.jsx';
import BookPage from './pages/Book.jsx';
import LoginPage from './pages/Login.jsx';
import './styles/global.css';
import TodoApp from './components/todo/TodoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        //! only this child inherit from App (same url ???)/ || homepage
        //! in that case the child belows will inherit nothing from parent (App component)
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
